import React from 'react';
import PropTypes from 'prop-types';

import NavSocialMedia from "./NavSocialMedia";

class NavSocialMediaHub extends React.Component {
    static propTypes = {
        isActive: PropTypes.bool
    };

    static defaultProps = {
        isActive: false
    };

    render() {
        let githubColor = this.props.isActive === true ? "#292929" : "#FFFFFF";
        return (
            <div className={"navbar-item centered"}>
                <NavSocialMedia href={"https://www.github.com/maximejen"} color={githubColor} target={'_blank'} iconName={"github"}/>
                <NavSocialMedia href={"https://www.twitter.com/maxime_jenny/"} color={'#0084FF'} target={'_blank'} iconName={"twitter"}/>
                <NavSocialMedia href={"https://www.linkedin.com/in/maxime-jenny/"} color={'#0077B5'} target={'_blank'} iconName={"linkedin"}/>
            </div>
        );
    }
}

export default NavSocialMediaHub