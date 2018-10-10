import React from 'react'

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import ResponsiveGridLayout from 'react-grid-layout';

class TestGrid extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        let layout = [
            {i: '0', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: '1', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: '2', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
            <ResponsiveGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <div key="0">Chibre</div>
                <div key="1">b</div>
                <div key="2">c</div>
            </ResponsiveGridLayout>
        )
    }
}

export default TestGrid;