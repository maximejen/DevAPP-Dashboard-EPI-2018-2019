import React from 'react'
import gql from 'graphql-tag'
import {Redirect} from "react-router-dom";
import ErrorMessage from "../home/Widgets/error/ErrorMessage";
import {Query} from 'react-apollo';
import PropTypes from 'prop-types';
import WidgetConfig from "./WidgetConfig";

const GET_WIDGET = gql`
    query getWidget($token: String!, $id: ID!) {
        widget(token: $token, id: $id) {
            id
            name
            slugname
            enable
            config {
                static
                specification
                posX
                posY
                width
                height
            }
        }
    }
`;

class ConfigForm extends React.Component {

    static propTypes = {
        id: PropTypes.string
    };

    render () {
        let userToken = sessionStorage.getItem("userToken");
        if (userToken === undefined && userToken === null)
            return <Redirect to={"/login"}/>;
        return (
            <Query query={GET_WIDGET} variables={{token: userToken, id: this.props.id}}>
                {({loading, error, data}) => {
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
                    return (
                        <div className={"column is-half"}>
                            <WidgetConfig userId={sessionStorage.getItem("userId")} config={data.widget}/>
                        </div>
                    );
                }}
            </Query>
        )
    }
}

export default ConfigForm