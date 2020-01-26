import React from "react";
import {Link} from "react-router-dom";
import MaterialIcon from "./MaterialIcon";
import {sideLinks} from "../../controller/sideLinks";
import SideLink from "../../model/SideLink";
import {updateSideLinks} from "../../controller/sideLinksUpdater";

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
                    {
                        sideLinks.map((sideLink: SideLink, index: number) => {
                            if (sideLink.path && sideLink.icon) {
                                return (
                                    <li className="bold">
                                        <Link className="waves-effect waves-cyan" to={sideLink.path} tabIndex={0}>
                                            <MaterialIcon iconName={sideLink.icon}/>
                                            <span className="menu-title">{sideLink.title}</span>
                                        </Link>
                                    </li>
                                );
                            } else {
                                return (
                                    <li className="navigation-header">
                                        <span className="navigation-header-text">{sideLink.title}</span>
                                    </li>
                                );
                            }
                        })
                    }
                </ul>
            </aside>
        );
    }

    componentDidMount(): void {
        updateSideLinks();
    }
}

export default Sidebar;