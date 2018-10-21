import React from 'react'

import NavBurger from "./header/NavBurger";
import NavItem from "./header/NavItem";
import HomeButton from "./header/HomeButton";

import PropTypes from "prop-types";

class Header extends React.Component {
    state = {
        isBurgerMode: false,
        user: this.props.user,
    };

    static propTypes = {
        user: PropTypes.object,
        isConnected: PropTypes.bool
    };

    static defaultProps = {
        user: undefined,
        isConnected: false
    };

    toggleNav = () => {
        this.setState(prevState => ({
            isBurgerMode: !prevState.isBurgerMode
        }));
    };

    render() {
        let navButton = (<div className={this.state.isBurgerMode ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end navbar-item" style={{marginLeft: "auto"}}>
                <NavItem className="navbar-item" redirectTo={"/register"} text={ "Register" } iconClass={"fas fa-user"}/>
            </div>
        </div>);

        if (this.props.isConnected === true) {
            navButton = (<div className={this.state.isBurgerMode ? 'navbar-menu is-active' : 'navbar-menu'}>
                <div className="navbar-end navbar-item" style={{marginLeft: "auto"}}>
                    <NavItem className="navbar-item" redirectTo={"/add-widget"} text={ "Add a Widget" } iconClass={"fas fa-plus"}/>
                </div>
                <div className="navbar-end navbar-item" style={{marginLeft: "0"}}>
                    <NavItem className="navbar-item" redirectTo={"/logout"} text={ "Logout" } iconClass={"fas fa-sign-out-alt"}/>
                </div>
            </div>);
        }

        return (
            <nav className="navbar is-dark is-fixed-top is-transparent"
                 aria-label="main navigation">
                <div className="navbar-brand">
                    <HomeButton isConnected={this.props.user !== undefined}/>
                    <NavBurger onClick={this.toggleNav} isActive={this.state.isBurgerMode}/>
                </div>
                {navButton}
            </nav>
        )
    }
}

export default Header