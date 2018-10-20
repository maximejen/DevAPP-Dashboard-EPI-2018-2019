import React from 'react';
import WidgetGrid from "../home/WidgetGrid";

import PropTypes from "prop-types";

class HomeRender extends React.Component {
    static propTypes = {
        data: PropTypes.array,
    };

    render() {
        return <div className={'home-content'}>
            <WidgetGrid data={this.props.data}/>
        </div>
    }
}

export default HomeRender