import React from "react";
import PropTypes from "prop-types";

import ErrorMessage from "../error/ErrorMessage";

import Weather from "./Weather";

class WeatherFetcher extends React.Component {
    state = {
        isLoading: true,
        error: undefined,
        response: undefined,

        temperature: undefined,
        weatherType: undefined,
        windSpeed: undefined,
        humidity: undefined,
    };

    static propTypes = {
        cityName: PropTypes.string
    };

    static defaultProps = {
        cityName: "Strasbourg"
    };

    componentDidMount() {
        let apiKey = "48d567bd76036dde98073d50e035a698";
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.props.cityName + "&appid=" + apiKey;
        let request = new Request(url, {
                method: 'GET'
            }
        );
        fetch(request)
            .catch(err => {
                this.setState({
                    error: err
                });
            })
            .then(response => {
                response.json().then(data => {
                    this.setState({
                        isLoading: false,
                        response: data
                    });
                });
            });
    }

    render() {
        let cityName = this.props.cityName;
        if (this.state.response) {
            console.log(this.state.response);
            let weatherType = this.state.response.weather[0].icon;
            let temperature = this.state.response.main.temp - 273.15;
            let windSpeed = this.state.response.wind.speed;
            let humidity = this.state.response.main.humidity;
            return <Weather isLoading={this.state.isLoading} weatherType={weatherType} humidity={humidity}
                            temperature={parseInt(temperature.toFixed(2))} windSpeed={windSpeed} location={cityName}/>
        }

        if (this.state.error !== undefined) {
            return <ErrorMessage errorTitle={"Fetch error"} errorMessage={this.state.error.message}/>;
        }
        return <Weather isLoading={this.state.isLoading}/>
    }
}

export default WeatherFetcher