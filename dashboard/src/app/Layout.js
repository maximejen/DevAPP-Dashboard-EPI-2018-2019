import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site'
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Router from './layout/Router'

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.updateUser = this.updateUser.bind(this);
    }

    state = {
        user: undefined
    };

    updateUser(newUser) {
        this.setState({
            user: newUser
        })
    }

    render() {
        console.log(!!this.state.user, "IN LAYOUT");
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
            <Header user={this.state.user}/>
            <Content style={{
                paddingTop: "3em"
            }}>
                <Router isConnected={!!this.state.user} updateUser={this.updateUser}/>
            </Content>
            <Footer />
        </Site>
    }
}

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout