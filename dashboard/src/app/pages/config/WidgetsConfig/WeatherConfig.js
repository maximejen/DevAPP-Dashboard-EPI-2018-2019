import React from 'react'
import PropTypes from "prop-types";
import Weather from "../../home/Widgets/weather/Weather";


class WeatherConfig extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    state = {
        location: this.props.location
    };

    static propTypes = {
        location: PropTypes.string,
        config: PropTypes.object,
    };

    handleChange(timezone) {
        this.setState({location: timezone})
    }

    render() {
        return (
            <div>
                <input type={"text"} onChange={this.handleChange} />
            </div>
        )
    }
}

export default WeatherConfig