import React from 'react'

import PropTypes from 'prop-types'
import AnalClock from 'react-clock'

class AnalogClock extends React.Component {
    constructor(props) {
        super(props);
        this.swapType = this.swapType.bind(this);
    }
    state = {
        date: new Date(),
        isAnalog: this.props.isAnalog,
        intervalId: undefined,
    };

    static defaultProps = {
        interval: 1
    };

    static propTypes = {
        isAnalog: PropTypes.bool,
        interval: PropTypes.number
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

    swapType() {
        this.setState({isAnalog: !this.state.isAnalog});
    };

    render() {
        const AnalogClock = (
            <div>
                <AnalClock style={{
                }}
                           value={this.state.date} size={200}/>
            </div>
        );

        return (
            AnalogClock
        );
    };
}

export default AnalogClock