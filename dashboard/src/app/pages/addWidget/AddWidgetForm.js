import React from "react";
import {Redirect} from "react-router-dom";
import Widget from "../home/Widgets/Widget";

const ADD_WIDGET_MUTATION = `mutation addWidget($token: String!, $id: ID!, $name: String!, $slugname: String!, $static: Boolean!,
    $posx: Int!, $posy: Int!, $height: Int!, $minheight: Int!,
    $maxheight: Int!, $width: Int!, $minwidth: Int!, $maxwidth: Int!) {
    addWidget(
      token: $token
      id: $id,
      name: $name,
      slugname: $slugname,
      posx: $posx,
      posy: $posy,
      width: $width,
      height: $height,
      minwidth: $minwidth,
      maxwidth: $maxwidth,
      minheight: $minheight,
      maxheight: $maxheight,
      static: $static,
    ) {id}
}
`;

class AddWidgetForm extends React.Component {
    state = {
        redirect: false,
        error: false,
        errorMessage: "",
        name: ""
    };

    validateForm() {
        return !(this.state.name === undefined || this.state.name === "");
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
        let reference = Widget.widgetReferences.find(element => {
            if (element.name === this.state.name)
                return element;
            return null;
        });

        let query = ADD_WIDGET_MUTATION;

        const variables = {
            token: sessionStorage.getItem("userToken"),
            id: sessionStorage.getItem("userId"),
            name: reference.renderName,
            slugname: this.state.name,
            posx: 0,
            posy: 0,
            width: reference.dataGrid.w,
            height: reference.dataGrid.h,
            minwidth: reference.dataGrid.minW,
            maxwidth: reference.dataGrid.maxW,
            minheight: reference.dataGrid.minH,
            maxheight: reference.dataGrid.maxH,
            specification: reference.specification,
            static: false
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
                            if (data !== undefined)
                                this.setState({
                                    redirect: true
                                })
                        }
                    });
            });
    };

    render() {
        let width = "18em";
        if (this.state.redirect) {
            return <Redirect push to={"/?reload=true"}/>;
        }
        let widgetList = [];
        let widgetReferences = Widget.widgetReferences;
        for (let index in Widget.widgetReferences) {
            widgetList.push(<option key={index} value={widgetReferences[index].name}>{widgetReferences[index].renderName}</option>);
        }
        return (
            <div className="columns is-centered is-multiline is-1" style={{
                backgroundColor: "white",
                padding: "1.5em",
                borderRadius: "10px",
                width: "20em"
            }}>
                <form action={"http://localhost:4000/login"} method={"POST"} onSubmit={this.handleSubmit}>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                            Name
                        </label>
                        <div className="select">
                            <select
                                id={"name"}
                                name="name"
                                className={"is-full"}
                                value={this.state.name}
                                onChange={this.handleChange}
                                style={{
                                    width: width
                                }}
                            >
                                <option value={""}>Select a widget in the list</option>
                                {widgetList}
                            </select>
                        </div>
                    </div>
                    <div className={"field"}>
                        <label className={"is-full label"}>
                        </label>
                        <button
                            name={"submit"}
                            className={"is-primary button"}
                            disabled={!this.validateForm()}
                            type="submit"
                            style={{
                                width: width
                            }}>
                            Add Widget
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddWidgetForm