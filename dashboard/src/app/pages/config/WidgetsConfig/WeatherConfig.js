import React from 'react'
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";


class WeatherConfig extends React.Component {
    constructor(props) {
        super(props);
        this.handleSwitches = this.handleSwitches.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    state = {
        enable: this.props.widget.enable,
        static: this.props.widget.config.static,
        location: this.props.spec.location,
        navigation: this.props.spec.navigation,
        temperatureType: this.props.spec.temperatureType,
        temperature: this.props.spec.temperature,
        humidity: this.props.spec.humidity,
        windSpeed: this.props.spec.windSpeed,
        interval: this.props.spec.interval,
        redirect: false
    };

    static propTypes = {
        widget: PropTypes.object,
        spec: PropTypes.object,
    };

    validateForm() {
        return (this.state.navigation === true || (this.state.navigation === false && this.state.location && this.state.location !== "")) && this.state.interval > 0;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSwitches(event) {
        this.setState({
            [event.target.id]: !this.state[event.target.id]
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let query = `
            mutation UpdateWidget($token: String!, $id: ID!, $posx: Int!, $posy: Int!, $width: Int!, $height: Int!, $enable: Boolean!, $static: Boolean!, $specification: String!) {
                updateWidget(token: $token, id: $id, posx: $posx, posy: $posy, width: $width, height: $height, enable: $enable, static: $static, specification: $specification) {id}           
            }
        `;

        let specification = {
            location: this.state.location,
                navigation: this.state.navigation,
                temperatureType: this.state.temperatureType,
                temperature: this.state.temperature,
                humidity: this.state.humidity,
                windSpeed: this.state.windSpeed,
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
        let temperatureTypes = [
            <option key={0} value={"°C"}>{"Celsius (°C)"}</option>,
            <option key={1} value={"K"}>{"Kalvin (K)"}</option>
        ];
        return (
            <div>
                <form action={"http://localhost:4000/"} method={"POST"} onSubmit={this.handleSubmit}>
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
                                <input id={"navigation"} type="checkbox" name="switchRoundedInfo enable"
                                       className="switch is-rounded is-info" checked={this.state.navigation} onChange={this.handleSwitches}/>
                                <label htmlFor={"navigation"}>Activate geolocation</label>
                            </div>
                            {
                                !this.state.navigation
                                &&
                                <div className={"field"}>
                                    <label className={"is-full label"}>
                                        Location
                                    </label>
                                    <input
                                        id={"location"}
                                        name={"location"}
                                        className={"is-full input"}
                                        type="text"
                                        value={this.state.location}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            }
                            <div className={"field"}>
                                <input id={"temperature"} type="checkbox" name="switchRoundedInfo enable"
                                       className="switch is-rounded is-info" checked={this.state.temperature} onChange={this.handleSwitches}/>
                                <label htmlFor={"temperature"}>Temperature</label>
                            </div>
                            {
                                this.state.temperature
                                &&
                                <div className={"field"}>
                                    <label className={"is-full label"}>
                                        Temperature type
                                    </label>
                                    <div className="select" style={{
                                        width: width
                                    }}>
                                        <select
                                            id={"temperatureType"}
                                            name="temperatureType"
                                            className={"is-full"}
                                            value={this.state.temperatureType}
                                            onChange={this.handleChange}
                                            style={{
                                                width: width
                                            }}
                                        >
                                            {temperatureTypes}
                                        </select>
                                    </div>
                                </div>
                            }
                            <div className={"field"}>
                                <input id={"windSpeed"} type="checkbox" name="switchRoundedInfo enable"
                                       className="switch is-rounded is-info" checked={this.state.windSpeed} onChange={this.handleSwitches}/>
                                <label htmlFor={"windSpeed"}>Wind speed</label>
                            </div>
                            <div className={"field"}>
                                <input id={"humidity"} type="checkbox" name="switchRoundedInfo enable"
                                       className="switch is-rounded is-info" checked={this.state.humidity} onChange={this.handleSwitches}/>
                                <label htmlFor={"humidity"}>Humidity</label>
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

export default WeatherConfig