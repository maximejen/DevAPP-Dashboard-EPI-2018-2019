import React from 'react'
import PropTypes from 'prop-types'
import FlipClock from './DigitalClock'

class Clock extends React.Component {

    state = {
        date: new Date(),
        Timezone: this.props.Timezone,
        open: false
    };

    static propTypes = {
        Timezone: PropTypes.string
    };

    componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    };

    render() {
        return <div>
            <FlipClock/>
        </div>;
    };
}

export default Clock