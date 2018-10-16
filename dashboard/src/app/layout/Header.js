import React from 'react'

import { NavLink } from 'react-router-dom'
import NavBurger from "./header/NavBurger";
import NavItem from "./header/NavItem";

class Header extends React.Component {
    state = {
        isBurgerMode: false
    };

    toggleNav = () => {
        this.setState(prevState => ({
            isBurgerMode: !prevState.isBurgerMode
        }));
    };

    render() {
        return (
            <nav className="navbar is-dark is-fixed-top is-transparent"
                 aria-label="main navigation">
                <div className="navbar-brand">
                    <NavLink
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
                    <NavBurger onClick={this.toggleNav} isActive={this.state.isBurgerMode}/>
                </div>
                <div className={this.state.isBurgerMode ? 'navbar-menu is-active' : 'navbar-menu'}>
                    <div className="navbar-end navbar-item" style={{marginLeft: "auto"}}>
                        <NavItem className="navbar-item" redirectTo={"/login"} text={ "Login" } iconClass={"fas fa-user"}/>
                    </div>
                    <div className="navbar-end navbar-item" style={{margin: "0"}}>
                        <NavItem className="navbar-item" redirectTo={"/register"} text={ "Register" } iconClass={"fas fa-user"}/>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header