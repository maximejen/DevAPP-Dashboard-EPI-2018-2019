import React from 'react'
import PropTypes from "prop-types";

import {Redirect} from "react-router-dom";

class POTDConfig extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleSwitches = this.handleSwitches.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    state = {
        enable: this.props.widget.enable,
        static: this.props.widget.config.static,
        interval: this.props.spec.interval,
        apiType: this.props.spec.apiType
    };

    static propTypes = {
        timeZone: PropTypes.string,
        widget: PropTypes.object,
        spec: PropTypes.object
    };

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSwitches(event) {
        this.setState({
            [event.target.id]: !this.state[event.target.id]
        });
    }

    validateForm() {
        return this.state.interval > 0;
    }

    handleSubmit(event) {
        event.preventDefault();

        let query = `
            mutation UpdateWidget($token: String!, $id: ID!, $posx: Int!, $posy: Int!, $width: Int!, $height: Int!, $enable: Boolean!, $static: Boolean!, $specification: String!) {
                updateWidget(token: $token, id: $id, posx: $posx, posy: $posy, width: $width, height: $height, enable: $enable, static: $static, specification: $specification) {id}           
            }
        `;

        let specification = {
            apiType: this.state.apiType,
            interval: this.state.interval
        };
        let specString = JSON.stringify(specification);

        const variables = {
            token: sessionStorage.getItem("userToken"),
            id: this.props.widget.id,
            enable: this.state.enable,
            static: this.state.static,
            specification: specString,
            posx: this.props.widget.config.posX,
            posy: this.props.widget.config.posY,
            width: this.props.widget.config.width,
            height: this.props.widget.config.height
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
                            this.setState({
                                redirect: true
                            })
                        }
                    });
            });
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to={"/?reload=true"}/>
        }
        let width = "100%";
        let apiTypes = [
            <option key={0} value={"nasa"}>{"NASA - Picture of the Day"}</option>,
            <option key={1} value={"pixabay"}>{"Pixabay - First Popular Picture"}</option>
        ];
        return (
            <div>
                <form action={"http://localhost:8080/"} method={"POST"} onSubmit={this.handleSubmit}>
                    <div key={this.props.id} className={"column is-multiline"} style={{
                        backgroundColor: "white",
                        padding: "1.5em",
                        borderRadius: "10px",
                        marginTop: "10em",
                        marginLeft: "15px",
                    }}>
                        <h1 className={"column title"}>
                            {this.props.widget.name}
                        </h1>
                        <div className={"field"}>
                            <input id={"enable"} type="checkbox" name="switchRoundedInfo enable"
                                   className="switch is-rounded is-info" checked={this.state.enable} onChange={this.handleSwitches}/>
                            <label htmlFor={"enable"}>Enable Widget</label>
                        </div>
                        {this.state.enable &&
                        <div>
                            <div className={"field"}>
                                <input id={"static"} type="checkbox" name="switchRoundedInfo static"
                                       className="switch is-rounded is-info" checked={this.state.static} onChange={this.handleSwitches}/>
                                <label htmlFor={"static"}>Static</label>
                            </div>
                            <div className={"field"}>
                                <label className={"is-full label"}>
                                    Picture Type (API)
                                </label>
                                <div className={"select"} style={{
                                    width: width
                                }}>
                                    <select id={"apiType"}
                                            name={"apiType"}
                                            className={"is-full input"}
                                            value={this.state.apiType}
                                            onChange={this.handleChange}>
                                        {apiTypes}
                                    </select>
                                </div>
                            </div>
                            <div className={"field"}>
                                <label className={"is-full label"}>
                                    Reload Interval (seconds)
                                </label>
                                <input
                                    id={"interval"}
                                    name={"interval"}
                                    className={"is-full input"}
                                    type="number"
                                    value={this.state.interval}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        }
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
                                Validate changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default POTDConfig