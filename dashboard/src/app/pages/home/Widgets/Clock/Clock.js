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

    static propTypes = {
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
            <div className={"columns is-multiline is-centered"}>
                <span className={"title column is-half"}>Current time:</span>
                <span className={"column is-half"} onClick={this.swapType}>Change clock</span>
                <AnalClock className={"column is-full"}
                    value={this.state.date} size={200}
                />
            </div>
        );

        const DigitalClock = (
            <div className={"columns is-multiline is-centered"}>
                <span className={"title column is-half"}>Current time:</span>
                <span className={"column is-half"} onClick={this.swapType}>Change clock</span>
                <FlipClock className={"column is-full"}/>
            </div>
        );

        return (
            this.state.isAnalog ? AnalogClock : DigitalClock
        );
    };
}

export default Clock