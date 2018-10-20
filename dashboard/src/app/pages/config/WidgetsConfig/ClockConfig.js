import React from 'react'
import PropTypes from "prop-types";

import TimezonePicker from "react-timezone";

class ClockConfig extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    state = {
        timezone: this.props.timeZone
    };

    static propTypes = {
        timeZone: PropTypes.string,
        config: PropTypes.object,
    };

    handleChange(timezone) {
        this.setState({timezone: timezone})
    }

    render() {
        return (
            <TimezonePicker
                value={this.state.timezone}
                onChange={timezone => this.handleChange(timezone)}
                inputProps={{
                    placeholder: 'Select Timezone...',
                    name: 'timezone',
                }}
            />
        )
    }
}

export default ClockConfig