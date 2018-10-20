import React from "react";
import {NavLink, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
const sha512 = require('sha512');

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            redirect: false,
            error: false,
            errorMessage: ""
        };
    }

    static propTypes = {
        updateUser: PropTypes.func
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
        const url = "http://localhost:4000/login";
        let hash = sha512(this.state.password);
        const data = JSON.stringify({
            email: this.state.email,
            password: hash.toString('hex')
        });
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: data
        })
            .catch(err => {
                this.setState({
                    error: err
                });
            })
            .then(response => {
                response.json()
                    .then(data => {
                        if (response.status === 401) {
                            this.setState({
                                errorMessage: data.message
                            })
                        } else {
                            this.props.updateUser(data);
                            if (data !== undefined)
                                this.setState({
                                    redirect: true
                                })
                        }
                    });
            });
    };

    render() {
        let width = "18em";
        if (this.state.redirect) {
            console.log("REDIRECT TO /");
            return <Redirect to={"/"}/>;
        }
        let classicClass = "is-full input";
        let errorClass = "is-full input is-danger";
        let errorMessage = this.state.errorMessage !== "" ?
            <p className="help is-danger">{this.state.errorMessage}</p> : "";
        return (
            <div className="columns is-centered is-multiline is-1" style={{
                backgroundColor: "white",
                padding: "1.5em",
                borderRadius: "10px",
                width: "20em"
            }}>
                <form action={"http://localhost:4000/login"} method={"POST"} onSubmit={this.handleSubmit}>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                            Email
                        </label>
                        <input
                            id={"email"}
                            name={"email"}
                            className={this.state.errorMessage === "incorrect email" ? errorClass : classicClass}
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            style={{
                                width: width
                            }}
                        />
                        {this.state.errorMessage === "incorrect email" ? errorMessage : ""}
                    </div>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                            Password
                        </label>
                        <input
                            id={"password"}
                            name={"password"}
                            className={this.state.errorMessage === "incorrect password" ? errorClass : classicClass}
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            style={{
                                width: width
                            }}/>
                        {this.state.errorMessage === "incorrect password" ? errorMessage : ""}
                    </div>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                        </label>
                        <button
                            name={"submit"}
                            className={"is-primary button"}
                            disabled={!this.validateForm()}
                            type="submit"
                            style={{
                                width: width
                            }}>
                            Login
                        </button>
                    </div>
                </form>
                <div style={{
                    fontSize: "0.85em",
                    paddingTop: "1em"
                }}>
                    Don't have an account yet ? <NavLink to="/register">Register</NavLink> here.
                </div>
            </div>
        );
    }
}

export default LoginForm