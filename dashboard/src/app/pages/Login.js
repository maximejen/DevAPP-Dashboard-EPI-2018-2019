import React from 'react';
import LoginForm from "./login/LoginForm";
import PropTypes from "prop-types";

class Login extends React.Component {
    static propTypes = {
        updateUser: PropTypes.func
    };

    render() {
        return (
            <div style={{
                backgroundImage: 'linear-gradient(to right, #00F18E , #00A0FD)',
                minHeight: "100%",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "80vh"
            }}>
                <LoginForm updateUser={this.props.updateUser}/>
            </div>
        );
    }
}

export default Login