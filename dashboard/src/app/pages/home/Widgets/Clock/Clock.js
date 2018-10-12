import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import AnalClock from 'react-clock'
import FlipClock from './DigitalClock'

class Clock extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        date: new Date(),
    };

    static propTypes = {
    };

    componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    };


    render() {
        return (
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
    };
}

export default Clock