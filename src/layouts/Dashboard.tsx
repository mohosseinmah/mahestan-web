import React from "react";
import "../assets/css/vendors.min.css";
import "../assets/css/style-rtl.min.css";
import "../assets/css/materialize.min.css";
import "../assets/css/style.min.css";
import "../assets/css/custom.css";
import {isNotAuthenticated} from "../controllers/authentication";
import {Redirect} from "react-router-dom";
import Header from "../components/Header";

class Dashboard extends React.Component {

    render() {
        if (isNotAuthenticated()) {
            return <Redirect to="/login"/>
        }

        return (
            <>
                <Header/>
            </>
        );
    }
}

export default Dashboard;