import React from "react";
import {Link} from "react-router-dom";
import MaterialIcon from "./MaterialIcon";
import {sideLinks} from "../../controller/sideLinks";
import SideLink from "../../model/SideLink";

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
                                    <li className="bold" onClick={this.handleClick}>
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
        const firstElement = document.getElementsByClassName("waves-effect waves-cyan").item(0) as HTMLElement;
        firstElement.className += " active";
    }

    private handleClick = (e: any) => {
        this.inactiveSidelinks();

        let targetElement = e.target;
        while (targetElement.localName !== "a") {
            targetElement = targetElement.parentElement;
        }
        targetElement.className = targetElement.className + " active";
    };

    private inactiveSidelinks = () => {
        const elements = document.getElementsByClassName("waves-effect waves-cyan");
        let element;
        for (let i = 0; i < elements.length; i++) {
            element = elements.item(i) as HTMLElement;
            element.className = element.className.replace(" active", "");
        }
    };
}

export default Sidebar;