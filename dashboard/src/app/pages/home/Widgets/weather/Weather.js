import React from 'react'
import PropTypes from 'prop-types'

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

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
            <div>
                <img src={'/loader.gif'} alt={"loading..."}/>
            </div>
        )
    }

    render() {
        if (this.props.isLoading)
            return Weather.loading();
        return (
            <div>
                weather widget
            </div>
        )
    }
}

export default Weather;