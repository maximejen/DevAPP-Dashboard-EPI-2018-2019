import React from 'react';
import WidgetGrid from "./home/WidgetGrid";
import {Redirect} from "react-router-dom";

import PropTypes from "prop-types";

class Home extends React.Component {
    state = {
        isConnected: this.props.isConnected
    };

    static propTypes = {
        isConnected: PropTypes.bool
    };

    static defaultProps = {
        isConnected: false
    };

    render() {
        console.log("is Connected in Home :", this.state.isConnected);
        if (this.state.isConnected === false) {
            return <Redirect to={"/login"}/>;
        }
        return <div className={'home-content'}>
            <section className="hero" style={{
                backgroundImage: 'linear-gradient(to right, #00F18E , #00A0FD)'
            }}>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            My Widgets
                        </h1>
                        <h2 className="subtitle">
                            They are cool :3
                        </h2>
                    </div>
                </div>
            </section>
            <WidgetGrid/>
        </div>
    }
}

export default Home