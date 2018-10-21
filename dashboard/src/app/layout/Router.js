import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from "../pages/Register";
import Config from '../pages/Config'

import PropTypes from "prop-types"
import Logout from "../pages/Logout";
import AddWidget from "../pages/AddWidget";

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
                <Route exact path='/' render={(props) => {
                    let getParameters = props.location.search;
                    let reload = false;
                    if (getParameters.includes("reload=true") === true) {
                        reload = true;
                    }
                    return <Home isConnected={this.props.isConnected} reloadWidgets={reload}/>;
                }}/>
                <Route path='/login' render={() => {
                    return <Login isConnected={this.props.isConnected} updateUser={this.props.updateUser}/>;
                }}/>
                <Route path='/config/:id' render={(props) => {
                    return <Config id={props.match.params.id} isConnected={this.props.isConnected}/>;
                }}/>
                <Route path='/register' component={Register}/>
                <Route path='/add-widget' render={() => {
                    return <AddWidget isConnected={this.props.isConnected}/>;
                }}/>
                <Route path='/logout' render={() => {
                    return <Logout updateUser={this.props.updateUser}/>
                }}/>
            </Switch>
        );
    }
}

export default Router