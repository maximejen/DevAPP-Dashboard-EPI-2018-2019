import React from 'react'

import NavBurger from "./header/NavBurger";
import NavItem from "./header/NavItem";
import HomeButton from "./header/HomeButton";

class Header extends React.Component {
    state = {
        isBurgerMode: false
    };

    static defaultProps = {
        user: undefined
    };

    toggleNav = () => {
        this.setState(prevState => ({
            isBurgerMode: !prevState.isBurgerMode
        }));
    };

    render() {
        let navButton = (<div className={this.state.isBurgerMode ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end navbar-item" style={{marginLeft: "auto"}}>
                <NavItem className="navbar-item" redirectTo={"/login"} text={ "Login" } iconClass={"fas fa-user"}/>
            </div>
            <div className="navbar-end navbar-item" style={{margin: "0"}}>
                <NavItem className="navbar-item" redirectTo={"/register"} text={ "Register" } iconClass={"fas fa-user"}/>
            </div>
        </div>);

        if (this.props.user !== undefined) {
            navButton = (<div className={this.state.isBurgerMode ? 'navbar-menu is-active' : 'navbar-menu'}>
                <div className="navbar-end navbar-item" style={{marginLeft: "auto"}}>
                    <NavItem className="navbar-item" redirectTo={"/logout"} text={ "" } iconClass={"fas fa-sign-out-alt"}/>
                </div>
                {/*<div className="navbar-end navbar-item" style={{margin: "0"}}>*/}
                    {/*<NavItem className="navbar-item" redirectTo={"/register"} text={ "Register" } iconClass={"fas fa-sign-out-alt"}/>*/}
                {/*</div>*/}
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