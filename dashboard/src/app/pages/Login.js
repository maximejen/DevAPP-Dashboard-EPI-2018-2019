import React from 'react';
import LoginForm from "./login/LoginForm";

class Login extends React.Component {
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
                <LoginForm/>
            </div>
        );
    }
}

export default Login