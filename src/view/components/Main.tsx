import React from "react";
import Row from "./Row";
import {Route, Switch} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import SangiBarGoori from "../pages/SangiBarGoori";

class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <Row>
                    <Switch>
                        <Route exact path="/stone" component={SangiBarGoori}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route path="/" component={Dashboard}/>
                    </Switch>
                </Row>
            </div>
        );
    }
}

export default Main;