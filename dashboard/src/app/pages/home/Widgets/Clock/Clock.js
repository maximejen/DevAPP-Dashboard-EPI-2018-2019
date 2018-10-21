import React from 'react'
import PropTypes from 'prop-types'
import FlipClock from './DigitalClock'

class Clock extends React.Component {

    state = {
        date: new Date(),
        Timezone: this.props.Timezone,
        open: false,
        intervalId: undefined
    };

    static propTypes = {
        Timezone: PropTypes.string,
        interval: PropTypes.number
    };

    static defaultProps = {
        interval: 1
    };

    componentDidMount() {
        this.setState({
            intervalId: setInterval(
                () => this.setState({ date: new Date() }),
                this.props.interval * 1000
            )
        });
    };

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return <div>
            <FlipClock/>
        </div>;
    };
}

export default Clock