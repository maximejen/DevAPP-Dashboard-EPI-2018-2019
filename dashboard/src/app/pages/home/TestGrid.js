import React from 'react'

import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import ResponsiveGridLayout from 'react-grid-layout';

class TestGrid extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        let layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
            <ResponsiveGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">c</div>
            </ResponsiveGridLayout>
        )
    }
}

export default TestGrid;