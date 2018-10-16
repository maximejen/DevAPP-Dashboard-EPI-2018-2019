import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from "../pages/Register";

class Router extends React.Component {
    state = {
        user: undefined
    };

    constructor(props) {
        super(props);

        this.updateUser = this.updateUser.bind(this);
    }

    updateUser(newUser) {
        this.setState({
            user: newUser
        })
    }

    render() {
        return <Switch>
            <Route exact path='/' render={() => {
                return <Home user={this.state.user}/>;
            }}/>
            <Route path='/login' render={() => {
                return <Login updateUser={this.updateUser}/>;
            }}/>
            <Route path='/register' component={Register}/>
        </Switch>
    }
}

export default Router