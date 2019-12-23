import React, {CSSProperties} from "react";
import MaterialIcon from "./MaterialIcon";
import {Link} from "react-router-dom";
import {logout} from "../controllers/authentication";

class Header extends React.Component {
    render() {
        const profileDropdownStyle: CSSProperties = {
            display: "none",
            width: "140px",
            left: "0px",
            top: "64px",
            height: "101px",
            transformOrigin: "0px 0px",
            opacity: "1",
            transform: "scaleX(1) scaleY(1)"
        };
        return (
            <header className="page-topbar" id="header">
                <div className="navbar navbar-fixed">
                    <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-light">
                        <div className="nav-wrapper">
                            <ul className="navbar-list right">
                                <li>
                                    <div onClick={this.handleClick}
                                         className="waves-effect waves-block waves-light profile-button">
                                        <span className="avatar-status avatar-online">
                                            <img src={require("../assets/images/avatar/user-avatar.png")} alt="avatar"/><i/>
                                        </span>
                                    </div>
                                    <ul className="dropdown-content" id="profile-dropdown" tabIndex={0}
                                        style={profileDropdownStyle}>
                                        <li tabIndex={0}>
                                            <Link className="grey-text text-darken-1" to="/profile">
                                                <MaterialIcon iconName="person_outline"/>&nbsp;پروفایل
                                            </Link>
                                        </li>
                                        <li className="divider" tabIndex={0}/>
                                        <li tabIndex={0}>
                                            <a href="/" className="grey-text text-darken-1" onClick={this.handleLogout}>
                                                <MaterialIcon iconName="keyboard_tab"/>&nbsp;خروج
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }

    private handleClick = (e: any) => {
        let targetElement = e.target;
        while (targetElement.localName !== "li") {
            targetElement = targetElement.parentElement;
        }
        if (targetElement.className === "active") {
            targetElement.className = "";
        } else {
            targetElement.className = "active";
        }

        const profileDropdown = document.getElementById("profile-dropdown");
        if (profileDropdown) {
            if (profileDropdown.style.display === "block") {
                profileDropdown.style.display = "none"
            } else {
                profileDropdown.style.display = "block";
            }
        }
    };

    private handleLogout = () => {
        logout();
        this.forceUpdate();
    };
}

export default Header;