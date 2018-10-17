import React from "react";

class Logout extends React.Component {
    componentWillMount() {
        sessionStorage.setItem("user", null);
    }

    render() {
        return <div style={{
            minHeight: "100%",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh"
        }}>
                <div className={"subtitle columns is-centered is-multiline is-1"} style={{
                    backgroundColor: "white",
                    padding: "1.5em",
                    borderRadius: "10px",
                    width: "20em",
                }}>
                    You are correctly logged out.
                </div>
            </div>
    }
}

export default Logout;