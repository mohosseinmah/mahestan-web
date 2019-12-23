import React from "react";
import {isNotAuthenticated} from "../controllers/authentication";
import {Redirect} from "react-router-dom";

class Dashboard extends React.Component {

    render() {
        if (isNotAuthenticated()) {
            return <Redirect to="/login"/>
        }

        return <div>Dashboard Layout</div>;
    }
}

export default Dashboard;