import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site';
import Header from './layout/Header';
import Content from './layout/Content';
import Router from './layout/Router';

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
        sessionStorage.setItem("userToken", newUser ? newUser.Token : null);
        sessionStorage.setItem("userName", newUser ? newUser.Name : null);
        sessionStorage.setItem("userId", newUser ? newUser.Id : null);
        sessionStorage.setItem("userEmail", newUser ? newUser.Email : null);
        this.setState({
            user: newUser,
            isConnected: !!newUser
        });
    }

    componentDidMount() {
        this.setState({
            user: {
                Token: sessionStorage.getItem("userToken"),
                Name: sessionStorage.getItem("userName"),
                Id: sessionStorage.getItem("userId"),
                Email: sessionStorage.getItem("userEmail")
            },
            isConnected: sessionStorage.getItem("userToken") !== null
        })
    }

    render() {
        return <Site>
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
    }
}

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout