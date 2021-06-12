import React, {Component} from 'react';

// Router import for redirection the page.
import {Route, Switch} from "react-router-dom";


// Imports of different pages in the application
import Home from './screens/home/Home';


// This class represents the whole FoodOrdering Application.
 
class FoodOrdering extends Component {
    constructor() {
        super();
        this.baseUrl = 'http://localhost:8080/api/'
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' render={(props) => <Home {...props} baseUrl={this.baseUrl}/>}/>
            </Switch>
        )
    }
}

export default FoodOrdering;