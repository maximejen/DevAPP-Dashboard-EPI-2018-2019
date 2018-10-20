import React from "react";

import ErrorMessage from "../error/ErrorMessage";
import POTD from "./POTD";

import PropTypes from "prop-types";

class POTDFetcher extends React.Component {
    static apis = {
        nasa: {
            url: "https://api.nasa.gov/planetary/apod?api_key=jhQHj4X4rX3anmogQ1hPgthQ0n7P2xTWaMlJvgVZ",
            src: (data) => {
                return data.url
            },
            title: (data) => {
                return data.title;
            },
            copyright: (data) => {
                return data.copyright;
            }
        },
        pixabay: {
            url: "https://pixabay.com/api/?key=10453380-74815c118ac4b56802b718eda&order=popular&per_page=3&orientation=horizontal",
            src: (data) => {
                return data.hits[0].largeImageURL;
            },
            title: (data) => {
                return data.hits[0].type;
            },
            copyright: (data) => {
                return data.hits[0].user;
            }
        }
    };

    state = {
        isLoading: true,
        data: undefined,
        tool: undefined,
        intervalId: undefined
    };

    static propTypes = {
        spec: PropTypes.object
    };

    componentWillMount() {
        this.setState({
            intervalId: setInterval(
                () => this.setState({ data: undefined }),
                this.props.spec.interval * 1000
            )
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        if (!this.state.data) {
            let url = POTDFetcher.apis.nasa.url;
            let index;
            let apiType = this.props.spec.apiType !== undefined ? this.props.spec.apiType : "nasa";
            for (index in POTDFetcher.apis) {
                if (index === apiType) {
                    url = POTDFetcher.apis[index].url;
                    break;
                }
            }
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
                        this.setState({
                            isLoading: false,
                            data: data,
                            tool: POTDFetcher.apis[index]
                        });
                    });
                });
        }

        if (this.state.data !== undefined && this.state.tool !== undefined) {
            return <POTD isLink={this.props.spec.isLink} src={this.state.tool.src(this.state.data)}
                         title={this.state.tool.title(this.state.data)} copyright={this.state.tool.copyright(this.state.data)}/>
        }

        if (this.state.error !== undefined) {
            return <ErrorMessage errorTitle={"Fetch error"} errorMessage={this.state.error.message}/>;
        }
        return <POTD isLoading={this.state.isLoading}/>
    }
}

export default POTDFetcher