import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Page from "../components/Page";

class Profile extends React.Component {
    render() {
        return (
            <>
                <Breadcrumb items={[{name: "پروفایل"}]}/>
                <Page>
                    <p className="caption mb-0">
                        اینجا پروفایل است!
                    </p>
                </Page>
            </>
        );
    }
}

export default Profile;