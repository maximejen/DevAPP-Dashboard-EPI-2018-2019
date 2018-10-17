import React from "react";
import {NavLink} from "react-router-dom";

import PropTypes from "prop-types";

class HomeButton extends React.Component {
    static propTypes = {
        isConnected: PropTypes.bool
    };

    static defaultProps = {
        isConnected: false
    };

    render() {
        return <NavLink
            className="navbar-item"
            to="/">
            <img
                style={{
                    borderTopLeftRadius: '50%',
                    borderTopRightRadius: '50%',
                    borderBottomLeftRadius: '50%',
                    borderBottomRightRadius: '50%',
                    marginRight: 15
                }}
                src="/logo.svg"
                width="50px"
                alt="logo"
            />
            Dashboard
        </NavLink>
    }
}

export default HomeButton;