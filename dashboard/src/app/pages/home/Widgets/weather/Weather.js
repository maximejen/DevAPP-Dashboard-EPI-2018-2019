import React from 'react'
import PropTypes from 'prop-types'

class Weather extends React.Component {

    static propTypes = {
        isLoading: PropTypes.bool,
        weatherType: PropTypes.string,
        location: PropTypes.string,
        temperature: PropTypes.number,
        windSpeed: PropTypes.number,
        humidity: PropTypes.number
    };

    static loading() {
        return (
            <div className={"columns is-centered"}>
                <img className={"column is-2"} src={'/loader.gif'} style={{height: "5rem"}} alt={"loading..."}/>
            </div>
        )
    }

    componentWillMount() {
        // TODO : ask the location of the user only if the configuration ask for the actual location.
        // TODO : get the name of the city and put in the state.
    }

    render() {
        if (this.props.isLoading)
            return Weather.loading();
        return (
            <div className={"columns is-multiline"}>
                <div className={"column columns is-multiline"}>
                    <div className={"column is-full"}>
                        <div style={{
                            fontSize: "2em"
                        }}>
                            {this.props.location}
                        </div>
                        <div>
                            {this.props.temperature}°C
                        </div>
                    </div>
                    <div className={"column is-full"}>

                    </div>
                </div>
                <div className={"column is-half is-right"}>
                    <img src={"/weather/" + this.props.weatherType + ".png"} alt={this.props.weatherType}/>
                </div>
            </div>
        )
    }
}

export default Weather;