import React from 'react'
import {Redirect} from "react-router-dom";
import Home from "./Home";
import ConfigForm from "./config/ConfigForm";

class Config extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        isConnected: this.props.isConnected
    };

    render() {
        return <div className={'home-content'}>
            <section className="hero" style={{
                backgroundImage: 'linear-gradient(to right, #00F18E , #00A0FD)'
            }}>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Configuration des widgets
                        </h1>
                    </div>
                </div>
            </section>
            <div className={"columns is-centerd"} style={{
                backgroundImage: 'linear-gradient(to right, #00F18E , #00A0FD)',
                minHeight: "100%",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "40vh"
            }}>
                <ConfigForm/>
            </div>
        </div>
    }
}

export default Config