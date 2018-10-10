import React from 'react';
import PropTypes from 'prop-types';

class NavSocialMedia extends React.Component {
    static propTypes = {
        href: PropTypes.string,
        target: PropTypes.string,
        color: PropTypes.string,
        iconName: PropTypes.string,
    };

    render() {
        return (
            <a className={"nav-social-media"} href={this.props.href} target={this.props.target}>
                <span className="icon" style={{color: this.props.color}}>
                    <i className={"fab fa-lg fa-" + this.props.iconName}/>
                </span>
            </a>
        );
    }
}

export default NavSocialMedia