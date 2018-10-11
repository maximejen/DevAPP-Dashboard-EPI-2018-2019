import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import AnalClock from 'react-clock'
import FlipClock from './DigitalClock'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.swapType = this.swapType.bind(this);
    }
    state = {
        date: new Date(),
        isAnalog: this.props.isAnalog,
    };

    static propanalog = {
        isAnalog: PropTypes.bool
    };

    componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    };

    swapType() {
        this.setState({isAnalog: !this.state.isAnalog});
    };

    render() {
        const AnalogClock = (
            <div onClick={this.swapType}>
                <h1 className={"title"}>Current time:</h1>
                <AnalClock
                    value={this.state.date} size={200}
                />
            </div>
        );

        const DigitalClock = (
            <div onClick={this.swapType}>
                <h1 className={"title"}>Current time:</h1>
                <FlipClock />
            </div>
        );

        return (
            this.state.isAnalog ? AnalogClock: DigitalClock
        );
    };
}

export default Clock