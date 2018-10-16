import React from "react";
import {NavLink} from "react-router-dom";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            agree: false
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.confirmPassword === this.state.password && this.state.agree === true;
    }

    handleCheckbox = event => {
        console.log(event.target.id);
        console.log(event.target.checked);
        this.setState({
            [event.target.id]: event.target.checked
        });
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        // TODO : encrypt the password in SHA512
        // TODO : submit the form.
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
                <form onSubmit={this.handleSubmit}>
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
                    <label className={"is-full label"}>
                        Password
                    </label>
                    <input
                        id={"password"}
                        className={"is-full input"}
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        style={{
                            width: width
                        }}
                    />
                    <label className={"is-full label"}>
                        Confirm password
                    </label>
                    <input
                        id={"confirmPassword"}
                        className={"is-full input"}
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        type="password"
                        style={{
                            width: width
                        }}
                    />
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