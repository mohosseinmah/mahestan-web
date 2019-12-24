import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import {Link} from "react-router-dom";

class Breadcrumb extends React.Component {

    render() {
        return (
            <div id="breadcrumbs-wrapper" className="breadcrumbs-bg-image">
                <Container>
                    <Row>
                        <Col className="s12 m6 16">
                            <h5 className="breadcrumbs-title mt-0 mb-0"><span>سنگی بر گوری</span></h5>
                        </Col>
                        <Col className="s12 m6 16 right-align-md">
                            <ol className="breadcrumbs mb-0">
                                <li className="breadcrumb-item">
                                    <Link to="/">خانه</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/pages">صفحات</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    سنگی بر گوری
                                </li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Breadcrumb;