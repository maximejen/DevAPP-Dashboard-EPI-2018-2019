import React from 'react';
import PropTypes from "prop-types";

import {NavLink} from 'react-router-dom'

class NavItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {hasIcon: this.props.iconClass !== ""};
    }

    static propTypes = {
        redirectTo: PropTypes.string,
        iconClass: PropTypes.string,
        text: PropTypes.string,
        target: PropTypes.string
    };

    static defaultProps = {
        iconClass: "",
        target: ""
    };

    render() {
        let toRender;
        if (this.state.hasIcon) {
            toRender =
                <NavLink className="navbar-item centered" to={this.props.redirectTo}>
                    <span className="icon has-text-primary" style={{marginRight: 5}}>
                        <i className={this.props.iconClass}/>
                    </span>
                    {this.props.text}
                </NavLink>;
        } else {
            toRender =
                <NavLink className="navbar-item centered" to={this.props.redirectTo}>
                    {this.props.text}
                </NavLink>
        }
        return toRender;
    }
}

export default NavItem