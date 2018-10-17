import React from 'react'

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import AnalogClock from './Widgets/Clockv2/AnalogClock'
import ResponsiveGridLayout from 'react-grid-layout';
import WeatherFetcher from "./Widgets/weather/WeatherFetcher";

class WidgetGrid extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        let layout = [
            {i: '0', x: 0, y: 0, w: 2, h: 6, minW: 2, minH: 6, maxW: 2, maxH: 6},
            {i: '1', x: 1, y: 0, w: 3, h: 4, minW: 3, minH: 4},
            {i: '2', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
            <ResponsiveGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={window.innerWidth - 64} style={{
                padding: "2rem",
                backgroundImage: 'linear-gradient(to right, #00F18E , #00A0FD)'
            }}>
                <div key="0" className={"columns is-centered"}>
                    <AnalogClock isAnalog={true} className={"column"}/>
                </div>
                <div key="1">
                    <WeatherFetcher/>
                </div>
                <div style={{
                    backgroundColor: "white"
                }} key="2">c</div>
            </ResponsiveGridLayout>
        )
    }
}

export default WidgetGrid;