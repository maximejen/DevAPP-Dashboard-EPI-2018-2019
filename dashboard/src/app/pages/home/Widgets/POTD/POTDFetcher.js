import React from "react";

import ErrorMessage from "../error/ErrorMessage";
import POTD from "./POTD";

class POTDFetcher extends React.Component {

    state = {
        isLoading: true,
        data: undefined
    };

    componentWillMount() {
        let url = "https://api.nasa.gov/planetary/apod?api_key=jhQHj4X4rX3anmogQ1hPgthQ0n7P2xTWaMlJvgVZ";
        let request = new Request(url, {
                method: 'GET'
            }
        );
        fetch(request)
            .catch(err => {
                this.setState({
                    error: err
                });
            })
            .then(response => {
                response.json().then(data => {
                    console.log("NASA:", data);
                    this.setState({
                        isLoading: false,
                        data: data
                    });
                });
            });
    }

    render() {
        if (this.state.data !== undefined) {
            return <POTD src={this.state.data.url} title={this.state.data.title} copyright={this.state.data.copyright}/>
        }

        if (this.state.error !== undefined) {
            return <ErrorMessage errorTitle={"Fetch error"} errorMessage={this.state.error.message}/>;
        }
        return <POTD isLoading={this.state.isLoading}/>
    }
}

export default POTDFetcher