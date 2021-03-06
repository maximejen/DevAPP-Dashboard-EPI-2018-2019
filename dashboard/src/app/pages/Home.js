import React from 'react';
import {Redirect} from "react-router-dom";
import gql from "graphql-tag";

import PropTypes from "prop-types";
import ErrorMessage from "./home/Widgets/error/ErrorMessage";
import HomeRender from "./home/HomeRender";
import {Query} from "react-apollo";

const GET_USER = gql`
    query User($token: String!, $id: ID!){
        user(token: $token, id: $id) {
            id
            name
            passwd
            token
            widgetSpec {
                id
                name
                slugname
                enable
                config {
                    ...configOfWidget
                }
            }
        }
    }

    fragment configOfWidget on Config {
        posX
        posY
        width
        height
        minWidth
        minHeight
        maxWidth
        maxHeight
        static
        specification
    }
`;

class Home extends React.Component {
    state = {
        isConnected: this.props.isConnected,
        isLoading: false
    };

    static propTypes = {
        isConnected: PropTypes.bool,
        reloadWidgets: PropTypes.bool,
    };

    static defaultProps = {
        isConnected: false,
        reloadWidgets: false
    };

    componentWillMount() {
        if (this.props.reloadWidgets === true) {
            window.location.reload();
        }
    }

    render() {
        if (this.state.reloadWidgets === true) {
            return (
                <div className={'column is-12 has-text-centered'}>
                    <img src={'/loader.gif'} alt={"loading..."}/>
                </div>
            );
        }
        let userToken = sessionStorage.getItem("userToken");
        let id = sessionStorage.getItem("userId");
        if (this.state.isConnected === false) {
            return <Redirect to={"/login"}/>;
        }
        return <Query randomNumber={this.state.key} query={GET_USER} variables={{token: userToken, id: id}}>
            {({loading, error, data, refetch}) => {
                if (loading)
                    return (
                        <div className={'column is-12 has-text-centered'}>
                            <img src={'/loader.gif'} alt={"loading..."}/>
                        </div>
                    );
                if (error) {
                    return <ErrorMessage
                        errorMessage={error.message}
                        errorTitle={'Fetch Error'}
                    />;
                }
                return <HomeRender data={data.user.widgetSpec}/>;
            }}
        </Query>
    }
}

export default Home