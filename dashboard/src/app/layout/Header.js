import React from 'react'
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom'
import NavBurger from "./header/NavBurger";
import NavItem from "./header/NavItem";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isBurgerMode: false,
        };

        this.handleChangeLocale = this.handleChangeLocale.bind(this);
    }

    static propTypes = {
        onChangeLocale: PropTypes.func
    };

    toggleNav = () => {
        this.setState(prevState => ({
            isBurgerMode: !prevState.isBurgerMode
        }));
    };

    handleChangeLocale(newLocale) {
        this.props.onChangeLocale(newLocale);
        this.state.i18n.changeLanguage(newLocale);
        this.setState(prevState => ({
            locale: newLocale
        }));
        this.props.onChangeLocale(newLocale);
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
                    <div className="navbar-start">
                        <NavItem redirectTo={"/blog"} text={ "Projects" } iconClass={"fas fa-code"}/>
                    </div>
                    <div className="navbar-end">
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header