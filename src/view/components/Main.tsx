import React from "react";
import Row from "./Row";
import {Route, Switch} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Courses from "../pages/Courses";
import Enrollment from "../pages/Enrollment";
import Schedule from "../pages/Schedule";

class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <Row>
                    <Switch>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/courses" component={Courses}/>
                        <Route path="/enrollment" component={Enrollment}/>
                        <Route path="/schedule" component={Schedule}/>
                        <Route path="/" component={Dashboard}/>
                    </Switch>
                </Row>
            </div>
        );
    }
}

export default Main;