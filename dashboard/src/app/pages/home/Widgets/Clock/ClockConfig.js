import React from 'react'
import Moment from 'react-moment'
import TimezonePicker from 'react-timezone';

class ClockConfig extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        timezone: "Gmt",
        date: new Date()
    };

    static propTypes = {
    };

    componentDidMount() {

    };

    render() {
        return (
            <div className={"column is-3"}>

            </div>
        )
    }
}