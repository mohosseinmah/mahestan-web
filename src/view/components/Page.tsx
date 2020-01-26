import React from "react";
import Container from "./Container";
import Section from "./Section";
import Card from "./Card";
import Col from "./Col";
import {updateSideLinks} from "../../controller/sideLinksUpdater";

class Page extends React.Component {

    constructor(props: any) {
        super(props);
        updateSideLinks();
    }

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