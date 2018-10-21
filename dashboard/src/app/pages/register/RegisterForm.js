import React from "react";
import {NavLink, Redirect} from "react-router-dom";
const sha512 = require('sha512');

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            agree: false,
            isEqual: true,
            errorMessage: "",
            redirect: false
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.confirmPassword === this.state.password && this.state.agree === true;
    }

    handleCheckbox = event => {
        this.setState({
            [event.target.id]: event.target.checked
        });
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = async event => {
        event.preventDefault();

        const query = `
            mutation editUser($name: String!, $password: String!, $email: String!) {
                createUser(
                    name: $name
                    passwd: $password
                    email: $email
                ) {
                    id
                }
            }
        `;
        let hash = sha512(this.state.password);
        const variables = {
            name: this.state.username,
            password: hash.toString('hex'),
            email: this.state.email
        };

        fetch('http://localhost:8080', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query, variables})
        }).catch(err => {
            this.setState({
                error: err
            });
        })
            .then(response => {
                if (response.status === 500) {
                    this.setState({
                        errorMessage: response.statusText
                    })
                }
                else
                    response.json()
                        .then(data => {
                            if (response.status !== 200) {
                                this.setState({
                                    errorMessage: response.statusText
                                })
                            } else {
                                if (data !== undefined) {
                                    this.setState({
                                        redirect: true
                                    })
                                }
                            }
                        });
            });
    };

    render() {
        let width = "18em";

        if (this.state.redirect === true)
            return <Redirect to={"/login"}/>;

        let classicClass = "is-full input";
        let errorClass = "is-full input is-danger";
        let successClass = "is-full input is-success";
        let errorMessage = <p className="help is-danger">Both passwords should be the same</p>;

        let passwordClass = "";
        if (this.state.password === this.state.confirmPassword && this.state.password.length > 0)
            passwordClass = successClass;
        else if (this.state.password === this.state.confirmPassword && this.state.password.length === 0)
            passwordClass = classicClass;
        else
            passwordClass = errorClass;

        let confirmPasswordClass = "";
        if (this.state.password === this.state.confirmPassword && this.state.confirmPassword.length > 0)
            confirmPasswordClass = successClass;
        else if (this.state.password === this.state.confirmPassword && this.state.confirmPassword.length === 0)
            confirmPasswordClass = classicClass;
        else
            confirmPasswordClass = errorClass;

        return (
            <div className="columns is-centered is-multiline is-1" style={{
                backgroundColor: "white",
                padding: "1.5em",
                borderRadius: "10px",
                width: "20em"
            }}>
                <form onSubmit={this.handleSubmit}>
                    <p className="help is-danger">{this.state.errorMessage}</p>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                            Username
                        </label>
                        <input
                            id={"username"}
                            className={"is-full input"}
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                            style={{
                                width: width
                            }}
                        />
                    </div>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                            Email
                        </label>
                        <input
                            id={"email"}
                            className={"is-full input"}
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            style={{
                                width: width
                            }}
                        />
                    </div>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                            Password
                        </label>
                        <input
                            id={"password"}
                            className={passwordClass}
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            style={{
                                width: width
                            }}
                        />
                    </div>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                            Confirm password
                        </label>
                        <input
                            id={"confirmPassword"}
                            className={passwordClass}
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            type="password"
                            style={{
                                width: width
                            }}
                        />
                        {confirmPasswordClass === errorClass ? errorMessage : ""}
                    </div>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                        </label>
                        <input
                            id={"agree"}
                            onChange={this.handleCheckbox}
                            className={"is-primary checkbox"}
                            type="checkbox"
                        >
                        </input>
                        <label className={"checkbox"}>
                            &nbsp;I agree the terms of use.
                        </label>
                    </div>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                        </label>
                        <button
                            className={"is-primary button"}
                            disabled={!this.validateForm()}
                            type="submit"
                            style={{
                                width: width
                            }}
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div style={{
                    fontSize: "0.85em",
                    paddingTop: "1em"
                }}>
                    You already have an account ? <NavLink to="/login">Login</NavLink> here.
                </div>
            </div>
        );
    }
}

export default RegisterForm