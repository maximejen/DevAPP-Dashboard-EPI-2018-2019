import React from 'react'
import gql from 'graphql-tag'
import {Redirect} from "react-router-dom";
import ErrorMessage from "../home/Widgets/error/ErrorMessage";
import {Query} from 'react-apollo';
import WidgetConfig from "./WidgetConfig";

const GET_WIDGETS = gql`
    query getWidget($token: String!, $id: ID!) {
        user(token: $token, id: $id) {
            widgetSpec {
                id
                name
                slugname
                enable
                needAuth
                authenticate
                authentication {
                    id
                    type
                    accessToken
                    refreshToken
                    expire
                }
                config {
                    posX
                    posY
                    height
                    minHeight
                    maxHeight
                    width
                    minWidth
                    maxWidth
                    static
                    location
                }
            }
        }
    }
`;

class ConfigForm extends React.Component {

    render () {
        let userToken = sessionStorage.getItem("userToken");
        let id = sessionStorage.getItem("userId");
        if (userToken === undefined && userToken === null)
            return <Redirect to={"/login"}/>;
        return (
            <Query query={GET_WIDGETS} variables={{token: "Salut", id: id}}>
                {({loading, error, data}) => {
                    console.log("Query");
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
                    let WidgetsConfig = [];
                    data.user.widgetSpec.forEach(function(widget, i) {
                        WidgetsConfig.push(<WidgetConfig config={widget} key={i}/>);
                    });
                    return (
                            WidgetsConfig
                    );
                }}
            </Query>
        )
    }
}

export default ConfigForm