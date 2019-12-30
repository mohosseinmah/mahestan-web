import React from "react";
import Row from "./Row";
import {Route, Switch} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import SangiBarGoori from "../pages/SangiBarGoori";
import Courses from "../pages/Courses";
import Enrollment from "../pages/Enrollment";

class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <Row>
                    <Switch>
                        <Route path="/stone" component={SangiBarGoori}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/courses" component={Courses}/>
                        <Route path="/enrollment" component={Enrollment}/>
                        <Route path="/" component={Dashboard}/>
                    </Switch>
                </Row>
            </div>
        );
    }
}

export default Main;