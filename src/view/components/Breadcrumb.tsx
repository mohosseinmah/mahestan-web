import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import {Link} from "react-router-dom";
import BreadcrumbItem from "../../model/BreadcrumbItem";

interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

class Breadcrumb extends React.Component<BreadcrumbProps, any> {

    private title() {
        return this.props.items[this.props.items.length - 1].name;
    };

    render() {
        return (
            <div id="breadcrumbs-wrapper" className="breadcrumbs-bg-image">
                <Container>
                    <Row>
                        <Col className="s12 m6 16">
                            <h5 className="breadcrumbs-title mt-0 mb-0"><span>{this.title()}</span></h5>
                        </Col>
                        <Col className="s12 m6 16 right-align-md">
                            <ol className="breadcrumbs mb-0">
                                <li className="breadcrumb-item">
                                    <Link to="/">میز کار</Link>
                                </li>
                                {
                                    this.props.items.map((item: BreadcrumbItem, index: number) => {
                                        if (item.path) {
                                            return (
                                                <li className="breadcrumb-item">
                                                    <Link to={item.path}>{item.name}</Link>
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li className="breadcrumb-item active">
                                                    {item.name}
                                                </li>
                                            );
                                        }
                                    })
                                }
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Breadcrumb;