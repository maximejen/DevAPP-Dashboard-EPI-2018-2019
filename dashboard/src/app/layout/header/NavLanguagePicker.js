import React from 'react';
import PropTypes from "prop-types";

class NavLanguagePicker extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    static propTypes = {
        locale: PropTypes.string,
        actualLocale: PropTypes.string,
        onClick: PropTypes.func,
        color: PropTypes.string,
        activatedColor: PropTypes.string
    };

    handleClick() {
        this.props.onClick(this.props.locale);
    }

    render() {
        let toRender;

        if (this.props.locale === this.props.actualLocale)
            toRender = <button className={"language_picker activated_language lang_" + this.props.locale}
                               onClick={this.handleClick} style={{backgroundColor: this.props.activatedColor}}>
                <img src={"/" + this.props.locale + ".png"} alt={this.props.locale}/>
            </button>;
        else
            toRender = <button className={"language_picker lang_" + this.props.locale} onClick={this.handleClick}
                               style={{backgroundColor: this.props.color}}>
                <img src={"/" + this.props.locale + ".png"} alt={this.props.locale}/>
            </button>;
        return toRender;
    }
}

export default NavLanguagePicker
