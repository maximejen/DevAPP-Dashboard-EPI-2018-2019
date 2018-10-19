import React from 'react'
import PropTypes from 'prop-types'
import FlipClock from './DigitalClock'
import TimezonePicker from "react-timezone";

class Clock extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        date: new Date(),
        Config: this.props.Config,
        Timezone: this.props.Timezone,
        open: false
    };

    static propTypes = {
        Config: PropTypes.bool,
        Timezone: PropTypes.string
    };

    componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    };

    handleChange(timezone) {
        this.setState({Timezone: timezone});
    };

    render() {
        const TimeDisp = (
            <div>
                <FlipClock/>
            </div>
        );

        const ConfigDisp = (
            <div>
                <div>
                    <FlipClock/>
                </div>
                <TimezonePicker
                    value={this.state.Timezone}
                    onChange={timezone => {this.handleChange(timezone)}}
                    inputProps={{
                        placeholder: 'Select Timezone...',
                        name: 'timezone',
                    }}
                />
            </div>
        );
        return this.state.Config ? ConfigDisp : TimeDisp;
    };
}

export default Clock