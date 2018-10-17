import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from "../pages/Register";

import PropTypes from "prop-types"

class Router extends React.Component {
    static propTypes = {
        isConnected: PropTypes.bool,
        updateUser: PropTypes.func
    };

    static defaultProps = {
        isConnected: false
    };

    render() {
        return (
            <Switch>
                <Route exact path='/' render={() => {
                    return <Home isConnected={this.props.isConnected}/>;
                }}/>
                <Route path='/login' render={() => {
                    return <Login updateUser={this.props.updateUser}/>;
                }}/>
                <Route path='/register' component={Register}/>
            </Switch>
        );
    }
}

export default Router