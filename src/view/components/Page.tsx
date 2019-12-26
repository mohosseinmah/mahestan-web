import React from "react";
import Container from "./Container";
import Section from "./Section";
import Card from "./Card";
import Col from "./Col";

class Page extends React.Component {
    render() {
        return (
            <Col className="s12">
                <Container>
                    <Section>
                        <Card>
                            {this.props.children}
                        </Card>
                    </Section>
                </Container>
                <div className="content-overlay"/>
            </Col>
        );
    }
}

export default Page;