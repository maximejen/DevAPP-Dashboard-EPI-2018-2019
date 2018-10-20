import React from 'react'
import PropTypes from "prop-types";
import moment from 'moment-timezone'
import ClockConfig from "./WidgetsConfig/ClockConfig";
import WeatherConfig from "./WidgetsConfig/WeatherConfig";

class WidgetConfig extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        enable: this.props.config.enable,
        static: this.props.config.config.static,
    };

    static propTypes = {
        userId: PropTypes.string,
        config: PropTypes.object,
        id: PropTypes.number
    };

    handleChange(event) {
        let type = event.target.name.split(' ')[1];
        if (type === "enable")
            this.setState({enable: !this.state.enable});
        if (type === "static")
            this.setState({static: !this.state.static});
    }

    render() {
        return (
            <div key={this.props.id} className={"column is-multiline"} style={{
                backgroundColor: "white",
                padding: "1.5em",
                borderRadius: "10px",
                marginTop: "15px",
                marginLeft: "15px"
            }}>
                <h1 className={"column title"}>
                    {this.props.config.name}
                </h1>
                <div className={"field"}>
                    <input id={this.props.config.name + "-" + this.props.userId + "-enable"} type="checkbox" name="switchRoundedInfo enable"
                        className="switch is-rounded is-info" checked={this.state.enable} onChange={this.handleChange}/>
                    <label htmlFor={this.props.config.name + "-" + this.props.userId + "-enable"}>Enable Widget</label>
                </div>
                {this.state.enable &&
                <div>
                    <div className={"field"}>
                        <input id={this.props.config.name + "-" + this.props.userId + "-static"} type="checkbox" name="switchRoundedInfo static"
                               className="switch is-rounded is-info" checked={this.state.static} onChange={this.handleChange}/>
                        <label htmlFor={this.props.config.name + "-" + this.props.userId + "-static"}>Static</label>
                    </div>
                    {
                        this.props.config.slugname === "clock" &&
                            <ClockConfig config={this.props.config} timeZone={moment.tz.guess()}/>
                    }
                    {
                        this.props.config.slugname === "weather" &&
                            <WeatherConfig config={this.props.config}/>
                    }
                </div>
                }
            </div>
        );
    }
}

export default WidgetConfig