import React from 'react'
import PropTypes from 'prop-types'

class Weather extends React.Component {

    static propTypes = {
        isLoading: PropTypes.bool,
        weatherType: PropTypes.string,
        temperatureType: PropTypes.string,
        location: PropTypes.string,
        temperature: PropTypes.number,
        windSpeed: PropTypes.number,
        humidity: PropTypes.number,
        isTemp: PropTypes.bool,
        isWindSpeed: PropTypes.bool,
        isHumidity: PropTypes.bool
    };

    static loading() {
        return (
            <div className={"columns is-centered"}>
                <img className={"column is-4"} src={'/loader.gif'} style={{height: "5rem"}} alt={"loading..."}/>
            </div>
        )
    }

    render() {
        if (this.props.isLoading)
            return Weather.loading();
        return (
            <div className={"columns"}>
                <div className={"columns is-multiline"}>
                    <div className={"column is-full"}>
                        <div style={{
                            fontSize: "2em"
                        }}>
                            {this.props.location}
                        </div>
                        {
                            this.props.isTemp === true &&
                            <div>
                                {this.props.temperature}{this.props.temperatureType}
                            </div>
                        }
                        {
                            this.props.isWindSpeed === true &&
                            <div>
                                wind: {this.props.windSpeed}m/s
                            </div>
                        }
                        {
                            this.props.isHumidity === true &&
                            <div>
                                humidity: {this.props.humidity}%
                            </div>
                        }
                    </div>
                    <div className={"column is-full"}>

                    </div>
                </div>
                <div className={"is-half is-right"}>
                    <img src={"/weather/" + this.props.weatherType + ".png"} alt={this.props.weatherType}/>
                </div>
            </div>
        )
    }
}

export default Weather;