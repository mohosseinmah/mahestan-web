import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Login from "./view/layouts/Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "./view/layouts/Dashboard";
import {authenticate} from "./controller/authentication";

const userItem = window.sessionStorage.getItem("user");
if (userItem) {
    authenticate(JSON.parse(userItem));
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Dashboard}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
