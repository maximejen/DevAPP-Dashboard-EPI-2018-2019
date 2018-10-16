import React from 'react';
import RegisterForm from "./register/RegisterForm";

class Register extends React.Component {
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
                <RegisterForm/>
            </div>
        );
    }
}

export default Register