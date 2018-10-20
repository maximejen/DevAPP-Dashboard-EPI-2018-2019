import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import AddWidgetForm from "./addWidget/AddWidgetForm";

class AddWidget extends React.Component {
    static propTypes = {
        isConnected: PropTypes.bool
    };

    static defaultProps = {
        isConnected: false
    };

    render() {
        if (this.props.isConnected === false) {
            return <Redirect to={"/login"}/>;
        }
        return <div>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Add a widget
                        </h1>
                        <p className={"subtitle"}>Select a widget in the list</p>
                    </div>
                </div>
            </section>
            <div style={{
                backgroundImage: 'linear-gradient(to right, #00F18E , #00A0FD)',
                minHeight: "100%",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh"
            }}>
                <AddWidgetForm/>
            </div>
        </div>;
    }
}

export default AddWidget;