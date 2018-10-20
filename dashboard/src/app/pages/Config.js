import React from 'react'
import {Redirect} from "react-router-dom";
import ConfigForm from "./config/ConfigForm";

class Config extends React.Component {
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
            <div className={"columns is-centered"} style={{
                backgroundImage: 'linear-gradient(to right, #00F18E , #00A0FD)',
                minHeight: "100%",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh"
            }}>
                <ConfigForm/>
            </div>
        </div>
    }
}

export default Config