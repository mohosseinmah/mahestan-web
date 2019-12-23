import React from "react";
import "../assets/css/vendors.min.css";
import "../assets/css/style-rtl.min.css";
import "../assets/css/materialize.min.css";
import "../assets/css/style.min.css";
import "../assets/css/custom.css";
import {isNotAuthenticated} from "../controllers/authentication";
import {Redirect} from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

class Dashboard extends React.Component {

    render() {
        if (isNotAuthenticated()) {
            return <Redirect to="/login"/>
        }

        return (
            <>
                <Header/>
                <Sidebar/>
                <Main/>
            </>
        );
    }
}

export default Dashboard;