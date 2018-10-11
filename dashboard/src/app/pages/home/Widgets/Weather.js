import React from 'react'
import GenericWeather from 'react-weather';

class Weather extends React.Component {
    /*getWeather() {
        let weather = {require("weather-js")};
        let json = "";
        weather.find({search: 'Strasbourg', degreetype: 'C'}, function(err, result) {
            if (err)
                console.log(err);
            json = JSON.stringify(result, null, 2);
        });
        return json;
    }*/

    render() {
        return (
            <div>
                <GenericWeather src={"Strasbourg"} temp={"30"} status={"Sun"}/>
            </div>
        )
    }
}

export default Weather;