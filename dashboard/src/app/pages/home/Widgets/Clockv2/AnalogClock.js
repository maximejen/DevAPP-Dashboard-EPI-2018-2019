import React from 'react'

import PropTypes from 'prop-types'
import AnalClock from 'react-clock'

class AnalogClock extends React.Component {
    constructor(props) {
        super(props);
        this.swapType = this.swapType.bind(this);
    }
    state = {
        date: new Date(),
        isAnalog: this.props.isAnalog,
    };

    static propTypes = {
        isAnalog: PropTypes.bool
    };

    componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    };

    swapType() {
        this.setState({isAnalog: !this.state.isAnalog});
    };

    render() {
        const AnalogClock = (
            <div>
                <div>&nbsp;</div>
                <AnalClock style={{
                }}
                           value={this.state.date} size={200}/>
            </div>
        );

        return (
            AnalogClock
        );
    };
}

export default AnalogClock