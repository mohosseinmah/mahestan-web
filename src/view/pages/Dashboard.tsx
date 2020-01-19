import React from "react";
import Page from "../components/Page";
import Row from "../components/Row";
import Col from "../components/Col";

class Dashboard extends React.Component {
    render() {
        return (
            <Page>
                <Row>
                    <Col className="s12 center-align">
                        <h4>به سامانه انتخاب واحد مهستان خوش آمدید</h4>
                        <h5>پروژه درس پایگاه داده ها</h5>
                        <p>مدرس: دکتر کیوان برنا</p>
                        <p>طراحی و پیاده سازی: علی شیرائی و محمد حسین محمودزاده</p>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default Dashboard;