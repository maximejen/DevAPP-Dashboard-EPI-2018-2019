import React from "react";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

class Logout extends React.Component {
    state = {
        redirect: false
    };

    static propTypes = {
        updateUser: PropTypes.func
    };

    componentDidMount() {
        this.props.updateUser(undefined);
        setTimeout(function() {
            this.setState({
                redirect: true
            })
        }.bind(this), 1500);
    }

    render() {
        if (this.state.redirect === true)
            return <Redirect to={"/login"}/>;
        return <div style={{
            minHeight: "100%",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh"
        }}>
                <div className={"columns is-centered is-multiline is-1"} style={{
                    backgroundColor: "white",
                    padding: "1.5em",
                    borderRadius: "10px",
                    width: "30em",
                }}>
                    Logging you out... redirecting to login page...
                </div>
            </div>
    }
}

export default Logout;