import React from 'react'

class ClockConfig extends React.Component {
    constructor(props) {
        super(props);
    };

    state = {
        timezone: "Gmt",
        date: new Date()
    };

    static propTypes = {
    };

    componentDidMount() {

    };

    render() {
        return (
            <div className={"column is-3"}>

            </div>
        )
    }
}