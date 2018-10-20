import React from "react";

import PropTypes from "prop-types";
import WeatherFetcher from "./weather/WeatherFetcher";
import POTDFetcher from "./POTD/POTDFetcher";
import Clock from "./Clock/Clock";
import AnalogClock from "./Clockv2/AnalogClock";
import TimezonePicker from "react-timezone";

class Widget extends React.Component {
    static nameReference = [
        {
            name: "clock", func:
                (specifications) => {
                    return <Clock/>;
                },
            dataGrid: {w: 3, h: 5, minW: 3, minH: 5, maxW: 3, maxH: 5}
        },
        {
            name: "weather",
            func:
                (specifications) => {
                    return <WeatherFetcher/>;
                },
            dataGrid: {w: 3, h: 4, minW: 3, minH: 4, maxW: 3, maxH: 4}
        },
        {
            name: "potd",
            func:
                (specifications) => {
                    return <POTDFetcher/>;
                },
            dataGrid: {w: 4, h: 11, minW: 4, minH: 11, maxW: 4, mawH: 11}
        },
        {
            name: "analogclock",
            func:
                (specifications) => {
                    return <AnalogClock/>;
                },
            dataGrid: {w: 2, h: 7, minW: 2, minH: 7, maxW: 2, maxH: 7}
        }
    ];

    static propTypes = {
        widgetName: PropTypes.string,
        specification: PropTypes.string
    };

    static defaultProps = {
        specification: ""
    };

    render() {
        let widget = Widget.nameReference.find((element) => {
            let name = this.props.widgetName;
            if (element.name === name) {
                return element;
            }
            return null;
        });
        if (widget === null)
            return <div>HAHA</div>;
        return widget.func(this.props.specification);
    }
}

export default Widget;