import React from 'react';
import PropTypes from "prop-types";

import NavLanguagePicker from "./NavLanguagePicker";

class NavLanguagePickerHub extends React.Component {
    static propTypes = {
        actualLocale: PropTypes.string,
        onClick: PropTypes.func,
        isBurgerMode: PropTypes.bool
    };

    static defaultProps = {
        isActive: false
    };

    render() {
        let color = this.props.isBurgerMode === true ? "#FFFFFF" : "#363636";
        let activatedColor = this.props.isBurgerMode === true ? "#c9c9c9" : "#666666";
        return (
            <div className={"navbar-item centered"} style={{padding: 0}}>
                <NavLanguagePicker locale={"fr"} actualLocale={this.props.actualLocale} onClick={this.props.onClick}
                                   color={color} activatedColor={activatedColor}/>
                <NavLanguagePicker locale={"en"} actualLocale={this.props.actualLocale} onClick={this.props.onClick}
                                   color={color} activatedColor={activatedColor}/>
            </div>
        );
    }
}

export default NavLanguagePickerHub
