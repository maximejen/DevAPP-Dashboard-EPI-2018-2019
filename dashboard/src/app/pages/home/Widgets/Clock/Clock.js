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
            <div className={"columns is-multiline"}>
                <div className={"column is-9"}/>
                <div style={{width: "4em"}} className={"column is-1"}>
                    <img src={"/gear.png"}/>
                </div>
                <AnalClock className={"is-full is-offset-2"}
                           value={this.state.date} size={200}
                />
            </div>
        );

        const DigitalClock = (
            <div className={"column is-multiline"}>
                <div className={"column is-11"} />
                <div style={{width: "4em"}} className={"is-right column is-1 is-full"}>
                    <img src={"/gear.png"}/>
                </div>
                <div className={"is-full column is-offset-2"}>
                    <FlipClock/>
                </div>
            </div>
        );

        return (
            this.state.isAnalog ? AnalogClock : DigitalClock
        );
    };
}

export default Clock