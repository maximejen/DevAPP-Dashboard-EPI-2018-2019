import React from 'react'
import weather from 'weather-js';

class Weather extends React.Component {
    getWeather() {
        let json = "";
        weather.find({search: 'Strasbourg', degreetype: 'C'}, function(err, result) {
            if (err)
                console.log(err);
            json = JSON.stringify(result, null, 2);
        });
        console.log(json);
        return json;
    }

    render() {
        let weather = this.getWeather();
        return (
            <div>
            </div>
        )
    }
}

export default Weather;