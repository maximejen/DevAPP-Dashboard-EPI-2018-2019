import React from 'react';
import LoginForm from "./login/LoginForm";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
    static propTypes = {
        updateUser: PropTypes.func
    };

    render() {
        console.log(sessionStorage.getItem("userToken"), "IN LOGIN");
        if (sessionStorage.getItem("userToken") !== undefined) {
            return <Redirect to={"/"}/>;
        }
        return (
            <div style={{
                backgroundImage: 'linear-gradient(to right, #00F18E , #00A0FD)',
                minHeight: "100%",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "90vh"
            }}>
                <LoginForm updateUser={this.props.updateUser}/>
            </div>
        );
    }
}

export default Login