import React from "react";
import PropTypes from "prop-types";

import ErrorMessage from "../error/ErrorMessage";

import Weather from "./Weather";

var NodeGeocoder = require('node-geocoder');


class WeatherFetcher extends React.Component {
    constructor(props) {
        super(props);

        this.savePosition = this.savePosition.bind(this);
    }

    state = {
        cityName: this.props.spec.location,
        isLoading: true,
        error: undefined,
        response: undefined,

        temperature: undefined,
        weatherType: undefined,
        windSpeed: undefined,
        humidity: undefined,
        intervalId: undefined

    };

    static propTypes = {
        spec: PropTypes.object
    };

    static defaultProps = {
        cityName: undefined
    };

    savePosition(position) {
        let options = {
            provider: 'openstreetmap',
        };
        let geocoder = NodeGeocoder(options);

        geocoder.reverse({lat: position.coords.latitude, lon: position.coords.longitude}, function (err, res) {
            let city = res[0].city;
            this.setState({
                cityName: city
            })
        }.bind(this));
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.savePosition);
        } else {
            this.setState({
                cityName: "Strasbourg"
            })
        }
    }

    componentDidMount() {
        if (this.props.spec.navigation === true) {
            this.getLocation();
        }
        else {
            this.setState({
                cityName: this.props.spec.location
            });
        }
        this.setState({
            intervalId: setInterval(
                () => this.setState({response: undefined}),
                this.props.spec.interval * 1000
            )
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        if (this.state.cityName && this.state.response === undefined) {
            let apiKey = "48d567bd76036dde98073d50e035a698";
            let url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.state.cityName + "&appid=" + apiKey;
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
        if (this.state.response) {
            let weatherType = this.state.response.weather[0].icon;
            let temperature = this.state.response.main.temp;
            temperature -= this.props.spec.temperatureType === "°C" ? 273.15 : 0;
            let windSpeed = this.state.response.wind.speed;
            let humidity = this.state.response.main.humidity;
            return <Weather isLoading={this.state.isLoading}
                            weatherType={weatherType}
                            humidity={humidity}
                            temperature={parseInt(temperature.toFixed(2))}
                            windSpeed={windSpeed}
                            location={this.state.cityName}
                            isTemp={this.props.spec.temperature}
                            isHumidity={this.props.spec.humidity}
                            isWindSpeed={this.props.spec.windSpeed}
                            temperatureType={this.props.spec.temperatureType}
            />
        }

        if (this.state.error !== undefined) {
            return <ErrorMessage errorTitle={"Fetch error"} errorMessage={this.state.error.message}/>;
        }
        return <Weather isLoading={this.state.isLoading}/>
    }
}

export default WeatherFetcher