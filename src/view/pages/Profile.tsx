import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Page from "../components/Page";
import Row from "../components/Row";
import Col from "../components/Col";
import {getCurrentUser} from "../../controller/authentication";

class Profile extends React.Component {
    render() {
        const currentUser = getCurrentUser();
        return (
            <>
                <Breadcrumb items={[{name: "پروفایل"}]}/>
                <Page>
                    <Row>
                        <Col className="s2">
                            <img className="responsive-img circle z-depth-5" width="200"
                                 src={require(`../../assets/images/avatar/${currentUser.avatar ? currentUser.avatar : "user-avatar.png"}`)}
                                 alt=""/>
                        </Col>
                        <Col className="s10 pt-2">
                            <Col className="s3 font-weight-600">نام:</Col>
                            <Col className="s9">{currentUser.firstName}</Col>
                            <br/>
                            <Col className="s3 font-weight-600">نام خانوادگی:</Col>
                            <Col className="s9">{currentUser.lastName}</Col>
                            <br/>
                            <Col className="s3 font-weight-600">شماره دانشجویی:</Col>
                            <Col className="s9">{currentUser.id}</Col>
                            <br/>
                            <Col className="s3 font-weight-600">رشته:</Col>
                            <Col className="s9">{currentUser.field}</Col>
                        </Col>
                    </Row>
                </Page>
            </>
        );
    }
}

export default Profile;