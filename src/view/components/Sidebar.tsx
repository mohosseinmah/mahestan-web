import React from "react";
import {Link} from "react-router-dom";
import MaterialIcon from "./MaterialIcon";

class Sidebar extends React.Component {

    render() {
        return (
            <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-dark sidenav-active-rounded">
                <div className="brand-sidebar">
                    <h1 className="logo-wrapper">
                        <Link className="brand-logo darken-1" to="/">
                            <img className="hide-on-med-and-down"
                                 src={require("../../assets/images/logo/logo.png")} alt="Logo"/>
                            <span className="logo-text hide-on-med-and-down">مهستان</span>
                        </Link>
                    </h1>
                </div>
                <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow ps ps--active-y right-aligned"
                    id="slide-out">
                    <li className="bold">
                        <Link className="waves-effect waves-cyan" to="/" tabIndex={0}>
                            <MaterialIcon iconName="settings_input_svideo"/>
                            <span className="menu-title">میز کار</span>
                        </Link>
                    </li>
                    <li className="navigation-header">
                        <span className="navigation-header-text">درس</span>
                    </li>
                    <li className="bold">
                        <Link className="waves-effect waves-cyan" to="/stone" tabIndex={0}>
                            <MaterialIcon iconName="settings_input_svideo"/>
                            <span className="menu-title">سنگی بر گوری</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        );
    }
}

export default Sidebar;