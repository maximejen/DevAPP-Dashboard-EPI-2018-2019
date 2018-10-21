import React from 'react'

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import GridLayout from 'react-grid-layout';
import Widget from "./Widgets/Widget";

import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

class WidgetGrid extends React.Component {
    constructor(props) {
        super(props);

        this.updateLayout = this.updateLayout.bind(this);
        this.handleLayoutChange = this.handleLayoutChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        layout: [],
        isLoading: true,
        redirectRoute: undefined
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
            let specification = config.specification;
            if (specification === null || specification === undefined || specification === "" || specification === '{}') {
                let widgetRef = Widget.widgetReferences.find(elem => elem.name === this.props.data[index].slugname);
                specification = widgetRef.defaultConfig;
            }
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
                    static: config.static,
                    specification: specification
                };
                this.updateLayout(dataGrid);
            }
        }
    }

    handleLayoutChange(newLayout) {
        for (let element in newLayout) {
            if (newLayout[element] !== this.state.layout[element]) {
                let newItem = newLayout[element];
                let x = newItem.x;
                let y = newItem.y;
                let w = newItem.w;
                let h = newItem.h;
                let id = this.state.layout[newItem.i].id;

                let query = `
                    mutation UpdateWidget($token: String!, $id: ID!, $posx: Int!, $posy: Int!, $width: Int!, $height: Int!, $enable: Boolean!, $static: Boolean!, $specification: String!) {
                        updateWidget(token: $token, id: $id, posx: $posx, posy: $posy, width: $width, height: $height, enable: $enable, static: $static, specification: $specification) {id}           
                    }
                `;

                let specification = this.state.layout.find(elem => elem.id === id).specification;
                console.log("SPEC", specification);

                const variables = {
                    token: sessionStorage.getItem("userToken"),
                    id: id,
                    enable: true,
                    static: false,
                    specification: specification,
                    posx: x,
                    posy: y,
                    width: w,
                    height: h
                };

                fetch('http://localhost:8080', {
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
        }
    }

    handleClick(event) {
        if (event.target.id === "delete") {
            let query = `mutation DeleteWidget($token: String!, $id: ID!) {deleteWidget(token: $token, id: $id) {id}}`;

            const variables = {
                token: sessionStorage.getItem("userToken"),
                id: event.target.parentElement.id
            };
            fetch('http://localhost:8080', {
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
                                window.location.reload();
                            }
                        });
                });
        }
        else if (event.target.id === "config") {
            let id = event.target.parentElement.id;
            if (id === "config")
                id = event.target.parentElement.parentElement.id;
            this.setState({
                redirectRoute: "/config/" + id
            })
        }
    }

    render() {
        if (this.state.redirectRoute !== undefined) {
            return <Redirect to={this.state.redirectRoute} />;
        }
        let colsNumber = (window.innerWidth - 64) / 155;

        let style = {
            backgroundColor: "white",
            padding: "1.5em",
            borderRadius: "10px",
            width: "20em",
            zIndex: "10"
        };
        let widgetList = [];
        for (let index in this.props.data) {
            if (this.props.data[index].enable === true) {
                widgetList.push(<div id={this.props.data[index].id} key={index.toString()} style={style}
                                     className={"columns is-centered is-multiline is-1"}>
                    <Widget widgetName={this.props.data[index].slugname}
                            specification={this.state.layout[index].specification}/>
                    <span id={"config"} className="is-1 column has-text-centered is-centered icon" style={{color: "dark grey", zIndex: "10000"}} onClick={this.handleClick}>
                        <i id={"config"} className={"fas fa-cog"}/>
                        &nbsp;
                    </span>
                    <span id={"delete"} className="is-1 column has-text-centered is-centered icon has-text-danger" style={{zIndex: "10000"}} onClick={this.handleClick}>
                        <i id={"delete"} className={"fas fa-trash"}/>
                        &nbsp;
                    </span>
                    <span className={"column is-10"}>
                        &nbsp;
                    </span>
                </div>);
            }
        }
        return (
            <GridLayout className="layout" layout={this.state.layout} cols={colsNumber} rowHeight={30}
                        width={window.innerWidth - 64} style={{
                padding: "2rem",
            }} onDragStop={this.handleLayoutChange} onResizeStop={this.handleLayoutChange}>
                {widgetList}
            </GridLayout>
        )
    }
}

export default WidgetGrid;