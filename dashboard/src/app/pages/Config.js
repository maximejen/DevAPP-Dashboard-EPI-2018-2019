import React from 'react'
import ConfigForm from "./config/ConfigForm";

import PropTypes from "prop-types";

class Config extends React.Component {
    state = {
        isConnected: this.props.isConnected
    };

    static propTypes = {
        id: PropTypes.string
    };

    render() {
        return <div className={'home-content'}>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Widgets configuration
                        </h1>
                        <p className={"subtitle"}>You can do whatever you want</p>
                    </div>
                </div>
            </section>
            <div className={"columns is-centered"} style={{
                backgroundImage: 'linear-gradient(to right, #00F18E , #00A0FD)',
                minHeight: "100%",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh"
            }}>
                <ConfigForm id={this.props.id}/>
            </div>
        </div>
    }
}

export default Config