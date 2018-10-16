import React from "react";
import {NavLink} from "react-router-dom";

import PropTypes from "prop-types";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
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

    handleSubmit = event => {
        event.preventDefault();

        const url = "http://localhost:4000/login";
        const data = JSON.stringify({
            username: this.state.email,
            password: this.state.password
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
                        console.log(data);
                        this.props.updateUser(data);
                    })
            });
    };

    render() {
        let width = "18em";
        return (
            <div className="columns is-centered is-multiline is-1" style={{
                backgroundColor: "white",
                padding: "1.5em",
                borderRadius: "10px",
                width: "20em"
            }}>
                <form action={"http://localhost:4000/login"} method={"POST"} onSubmit={this.handleSubmit}>
                    <label className={"is-full label"}>
                        Email
                    </label>
                    <input
                        id={"email"}
                        name={"email"}
                        className={"is-full input"}
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        style={{
                            width: width
                        }}
                    />
                    <label className={"is-full label"}>
                        Password
                    </label>
                    <input
                        id={"password"}
                        name={"password"}
                        className={"is-full input"}
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        style={{
                            width: width
                        }}
                    />
                    <label className={"is-full label"}>
                    </label>
                    <button
                        name={"submit"}
                        className={"is-primary button"}
                        disabled={!this.validateForm()}
                        type="submit"
                        style={{
                            width: width
                        }}
                    >
                        Login
                    </button>
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