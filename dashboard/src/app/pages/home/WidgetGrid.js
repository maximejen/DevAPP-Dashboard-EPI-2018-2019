import React from 'react'

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Clock from './Widgets/Clock/Clock.js'
import ResponsiveGridLayout from 'react-grid-layout';
import WeatherFetcher from "./Widgets/weather/WeatherFetcher";

class WidgetGrid extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        let layout = [
            {i: '0', x: 0, y: 0, w: 3, h: 5, minW: 3, minH: 5, maxW: 3, maxH: 5},
            {i: '1', x: 1, y: 0, w: 3, h: 4, minW: 3, minH: 4},
        ];
        return (
            <ResponsiveGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={window.innerWidth - 64} style={{
                padding: "2rem",
            }}>
                <div key="0" style={{
                    backgroundColor: "white",
                    padding: "1.5em",
                    borderRadius: "10px",
                    width: "20em"
                }}>
                   <Clock Config={false}/>
                </div>
                <div key="1" className="columns is-centered is-multiline is-1" style={{
                    backgroundColor: "white",
                    padding: "1.5em",
                    borderRadius: "10px",
                    width: "20em"
                }}>
                   <WeatherFetcher/>
                </div>
            </ResponsiveGridLayout>
        )
    }
}

export default WidgetGrid;