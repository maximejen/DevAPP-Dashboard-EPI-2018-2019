import React from 'react'

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import GridLayout from 'react-grid-layout';
import Widget from "./Widgets/Widget";

import PropTypes from "prop-types";

class WidgetGrid extends React.Component {
    constructor(props) {
        super(props);

        this.updateLayout = this.updateLayout.bind(this);
    }

    state = {
        layout: [],
        isLoading: true
    };

    static propTypes = {
        data: PropTypes.array,
    };

    static defaultProps = {
        data: []
    };

    updateLayout(newElement) {
        let newLayout = this.state.layout;
        let exists = false;
        for (let index in newLayout) {
            if (newLayout[index].i === newElement.i)
                exists = true;
        }
        if (exists === false) {
            newLayout.push(newElement);
            this.setState({
                layout: newLayout,
                isLoading: false
            });
        }
    }

    componentWillMount() {
        let widgetList = this.props.data;

        for (let index in widgetList) {
            let config = widgetList[index].config;
            let dataGrid = {
                i: index,
                x: config.posX,
                y: config.posY,
                w: config.width,
                h: config.height,
                minW: config.minWidth,
                minH: config.minHeight,
                maxW: config.maxWidth,
                maxH: config.maxHeight
            };
            this.updateLayout(dataGrid);
        }
    }

    render() {
        let colsNumber = (window.innerWidth - 64) / 155;

        let style = {
            backgroundColor: "white",
            padding: "1.5em",
            borderRadius: "10px",
            width: "20em"
        };
        let widgetList = [];
        for (let index in this.props.data) {
            widgetList.push(<div key={index.toString()} style={style} className={"columns is-centered is-multiline is-1"}>
                <Widget widgetName={this.props.data[index].slugname} specification={this.props.data[index].specification}/>
            </div>);
        }
        return (
            <GridLayout className="layout" layout={this.state.layout} cols={colsNumber} rowHeight={30} width={window.innerWidth - 64} style={{
                padding: "2rem",
            }}>
                {widgetList}
            </GridLayout>
        )
    }
}

export default WidgetGrid;