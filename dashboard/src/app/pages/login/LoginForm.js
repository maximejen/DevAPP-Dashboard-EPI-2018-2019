import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

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
    };

    render() {
        let width = "23em";
        return (
            <div className="columns is-centered is-multiline is-1" style={{
                backgroundColor: "white",
                padding: "1.5em",
                borderRadius: "10px",
                width: "20em"
            }}>
                <span>Please Login to the Platform</span>
                <form onSubmit={this.handleSubmit}>
                    <label className={"column is-full"}>
                        Email
                    </label>
                    <input
                        id={"email"}
                        className={"column is-full"}
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        style={{
                            width: width
                        }}
                    />
                    <label className={"column is-full"}>
                        Password
                    </label>
                    <input
                        id={"password"}
                        className={"column is-full"}
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        style={{
                            width: width
                        }}
                    />
                    <label className={"column is-full"}>

                    </label>
                    <button
                        className={"column is-full"}
                        disabled={!this.validateForm()}
                        type="submit"
                        style={{
                            width: width
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm