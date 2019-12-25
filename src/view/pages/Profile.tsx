import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Col from "../components/Col";
import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";

class Profile extends React.Component {
    render() {
        return (
            <>
                <Breadcrumb items={[{name: "پروفایل"}]}/>
                <Col className="s12">
                    <Container>
                        <Section>
                            <Card>
                                <p className="caption mb-0">
                                    اینجا پروفایل است!
                                </p>
                            </Card>
                        </Section>
                    </Container>
                    <div className="content-overlay"/>
                </Col>
            </>
        );
    }
}

export default Profile;