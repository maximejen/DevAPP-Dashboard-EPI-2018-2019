import React from 'react'
import PropTypes from "prop-types";


class WidgetConfig extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        config: PropTypes.object,
        id: PropTypes.number
    };

    render() {
        console.log("WidgetConfig: " + this.props.config);
        return <div key={this.props.id} className={"column is-multiline is-three-quarters"} style={{
            backgroundColor: "white",
            padding: "1.5em",
            borderRadius: "10px"
        }}><h1 className={"column title"}>{this.props.config.name}</h1>
            {this.props.config.enable &&
            <h2>
                Enable:
                <div className={"field"}>
                    <input id={"switchRoundedSuccess"} type={"checkbox"} name={"switchRoundedSuccess"}
                           className={"switch is-rounded is-success"} checked={"checked"}/>
                </div>
            </h2>}
        </div>
    }
}

export default WidgetConfig