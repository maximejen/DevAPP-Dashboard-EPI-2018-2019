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
        this.handleWidgetChange = this.handleWidgetChange.bind(this);
    }

    state = {
        layout: [],
        isLoading: true,
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
                isLoading: false,
            });
        }
    }

    componentWillMount() {

        for (let index in this.props.data) {
            let config = this.props.data[index].config;
            if (this.props.data[index].enable === true) {
                let dataGrid = {
                    id: this.props.data[index].id,
                    i: index,
                    x: config.posX,
                    y: config.posY,
                    w: config.width,
                    h: config.height,
                    minW: config.minWidth,
                    minH: config.minHeight,
                    maxW: config.maxWidth,
                    maxH: config.maxHeight,
                    static: config.static
                };
                this.updateLayout(dataGrid);
            }
        }
    }

    handleWidgetChange(layout, oldItem, newItem) {
        console.log(newItem);
        let x = newItem.x;
        let y = newItem.y;
        let w = newItem.w;
        let h = newItem.h;
        let id = this.state.layout[newItem.i].id;
        console.log(x, y, id);

        let query = `
            mutation UpdateWidget($id: ID!, $posx: Int!, $posy: Int!, $width: Int!, $height: Int!) {
                updateWidget(id: $id, posx: $posx, posy: $posy, width: $width, height: $height) {id}           
            }
        `;

        const variables = {
            id: id,
            posx: x,
            posy: y,
            width: w,
            height: h
        };

        fetch('http://localhost:4000', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query, variables})
        }).catch(err => {
            this.setState({
                error: err
            });
        })
            .catch(err => {
                this.setState({
                    error: err
                });
            })
            .then(response => {
                response.json()
                    .then(data => {
                        if (response.status !== 200) {
                            this.setState({
                                errorMessage: data.message
                            })
                        } else {
                        }
                    });
            });
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
            if (this.props.data[index].enable === true) {
                widgetList.push(<div key={index.toString()} style={style}
                                     className={"columns is-centered is-multiline is-1"}>
                    <Widget widgetName={this.props.data[index].slugname}
                            specification={this.props.data[index].specification}/>
                </div>);
            }
        }
        return (
            <GridLayout className="layout" layout={this.state.layout} cols={colsNumber} rowHeight={30}
                        width={window.innerWidth - 64} style={{
                padding: "2rem",
            }} onDragStop={this.handleWidgetChange} onResizeStop={this.handleWidgetChange}>
                {widgetList}
            </GridLayout>
        )
    }
}

export default WidgetGrid;