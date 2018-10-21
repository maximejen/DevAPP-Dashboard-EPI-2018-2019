import React from "react";

import PropTypes from "prop-types";
import WeatherFetcher from "./weather/WeatherFetcher";
import POTDFetcher from "./POTD/POTDFetcher";
import Clock from "./Clock/Clock";
import AnalogClock from "./Clockv2/AnalogClock";

class Widget extends React.Component {
    static widgetReferences = [
        {
            name: "clock",
            renderName: "Digital Clock",
            func:
                (specifications) => {
                    return <Clock/>;
                },
            dataGrid: {w: 3, h: 5, minW: 3, minH: 5, maxW: 3, maxH: 5},
            defaultConfig: '{}'
        },
        {
            name: "weather",
            renderName: "Weather",
            func:
                (specifications) => {
                    let spec = JSON.parse(specifications);
                    console.log(spec);
                    return <WeatherFetcher spec={spec}/>;
                },
            dataGrid: {w: 3, h: 4, minW: 3, minH: 4, maxW: 3, maxH: 4},
            defaultConfig: '{"location": "Strasbourg", "navigation": false, "temperatureType": "°C", "temperature": true, "windSpeed": true, "humidity": true, "interval": 600}'
        },
        {
            name: "potd",
            renderName: "Picture of the Day",
            func:
                (specifications) => {
                    let spec = JSON.parse(specifications);
                    return <POTDFetcher spec={spec}/>;
                },
            dataGrid: {w: 4, h: 12, minW: 4, minH: 12, maxW: 4, maxH: 12},
            defaultConfig: '{"apiType": "pixabay", "isLink": true, "interval": 10000}'
        },
        {
            name: "analogclock",
            renderName: "Analogical Clock",
            func:
                (specifications) => {
                    return <AnalogClock/>;
                },
            dataGrid: {w: 2, h: 7, minW: 2, minH: 7, maxW: 2, maxH: 7},
            defaultConfig: '{}'
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
        let widget = Widget.widgetReferences.find((element) => {
            let name = this.props.widgetName;
            if (element.name === name) {
                return element;
            }
            return null;
        });
        if (widget === null) {
            return <div>HAHA</div>;
        }
        let spec = this.props.specification;
        console.log(this.props);
        if (spec === null || spec === undefined || spec === "")
            spec = widget.defaultConfig;
        return widget.func(spec);
    }
}

export default Widget;