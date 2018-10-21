import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site';
import Header from './layout/Header';
import Content from './layout/Content';
import Router from './layout/Router';

// Apollo Client Part.
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
    uri: "http://localhost:8080/"
});

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.updateUser = this.updateUser.bind(this);
    }

    state = {
        user: undefined,
        isConnected: false
    };

    updateUser(newUser) {
        sessionStorage.setItem("userToken", newUser ? newUser.token : null);
        sessionStorage.setItem("userName", newUser ? newUser.name : null);
        sessionStorage.setItem("userId", newUser ? newUser.id : null);
        sessionStorage.setItem("userEmail", newUser ? newUser.email : null);
        this.setState({
            user: newUser,
            isConnected: !!newUser
        });
    }

    componentDidMount() {
        if (sessionStorage.getItem("userToken") !== undefined && sessionStorage.getItem("userToken") !== "null") {
            this.setState({
                user: {
                    Token: sessionStorage.getItem("userToken"),
                    Name: sessionStorage.getItem("userName"),
                    Id: sessionStorage.getItem("userId"),
                    Email: sessionStorage.getItem("userEmail")
                },
                isConnected: sessionStorage.getItem("userToken") !== null
            });
        } else {
            this.setState({
                user: undefined,
                isConnected: false
            })
        }
    }

    render() {
        return <ApolloProvider client={client}>
            <Site>
                <Helmet
                    title="Dashboard"
                    meta={[
                        { name: 'description', content: 'Dashboard' },
                        { name: 'keywords', content: 'dashboard' },
                    ]}
                    script={[
                        { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
                    ]}
                    link={[
                        {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
                    ]}
                />
                <Header isConnected={this.state.isConnected} user={this.state.user}/>
                <Content style={{
                    paddingTop: "3em",
                    backgroundImage: 'linear-gradient(to right, #00F18E , #00A0FD)'
                }}>
                    <Router isConnected={this.state.isConnected} updateUser={this.updateUser}/>
                </Content>
            </Site>
        </ApolloProvider>
    }
}

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout