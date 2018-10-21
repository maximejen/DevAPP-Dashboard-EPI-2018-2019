import React from 'react'
import PropTypes from "prop-types";
import moment from 'moment-timezone'
import ClockConfig from "./WidgetsConfig/ClockConfig";
import AnalogClockConfig from "./WidgetsConfig/AnalogClockConfig";
import WeatherConfig from "./WidgetsConfig/WeatherConfig";
import Widget from "../home/Widgets/Widget";
import POTDConfig from "./WidgetsConfig/POTDConfig";

class WidgetConfig extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    static formReferences = [
        {
            slugname: "clock",
            form: (props) => {
                let specification = props.config.config.specification;
                if (specification === null || specification === undefined) {
                    let configRef = Widget.widgetReferences.find(elem => elem.name === props.config.slugname);
                    specification = configRef.defaultConfig;
                }
                let spec = JSON.parse(specification);
                console.log(moment.tz.guess());
                return <ClockConfig widget={props.config} spec={spec}/>;
            }
        },
        {
            slugname: "analogclock",
            form: (props) => {
                let specification = props.config.config.specification;
                if (specification === null || specification === undefined) {
                    let configRef = Widget.widgetReferences.find(elem => elem.name === props.config.slugname);
                    specification = configRef.defaultConfig;
                }
                let spec = JSON.parse(specification);
                return <AnalogClockConfig widget={props.config} spec={spec}/>;
            }
        },
        {
            slugname: "weather",
            form: (props) => {
                let specification = props.config.config.specification;
                if (specification === null || specification === undefined) {
                    let configRef = Widget.widgetReferences.find(elem => elem.name === props.config.slugname);
                    specification = configRef.defaultConfig;
                }
                let spec = JSON.parse(specification);
                return <WeatherConfig widget={props.config} spec={spec}/>;
            }
        },
        {
            slugname: "potd",
            form: (props) => {
                let specification = props.config.config.specification;
                if (specification === null || specification === undefined) {
                    let configRef = Widget.widgetReferences.find(elem => elem.name === props.config.slugname);
                    specification = configRef.defaultConfig;
                }
                let spec = JSON.parse(specification);
                return <POTDConfig widget={props.config} spec={spec}/>;
            }
        }
    ];

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
        let form = WidgetConfig.formReferences.find(elem => elem.slugname === this.props.config.slugname).form(this.props);
        return <div>{form}</div>;
    }
}

export default WidgetConfig