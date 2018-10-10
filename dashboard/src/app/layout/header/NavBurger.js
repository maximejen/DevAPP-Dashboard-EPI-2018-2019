import React from 'react';
import PropTypes from 'prop-types';

class NavBurger extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        isActive: PropTypes.bool
    };

    static defaultProps = {
        isActive: false
    };

    render() {
        let classIsActive = this.props.isActive === true ? "is-active" : "";
        return <div className={"navbar-burger burger " + classIsActive}
                    data-target="navbarExampleTransparentExample"
                    onClick={this.props.onClick}>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
        </div>;
    }
}

export default NavBurger