import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Page from "../components/Page";
import {findExams} from "../../controller/backend/client";
import ResponseEntity from "../../model/ResponseEntity";
import Table from "../components/Table";
import Preloader from "../components/Preloader";
import Row from "../components/Row";
import Col from "../components/Col";

class Exams extends React.Component {
    private columns = [
        "شماره درس",
        "نام درس",
        "نام استاد",
        "تاریخ و ساعت"
    ];
    private result: any = undefined;

    constructor(props: any) {
        super(props);
        this.findExams();
    }

    render() {
        return (
            <>
                <Breadcrumb items={[{name: "برنامه امتحان"}]}/>
                <Page>
                    <Row>
                        <Col className="s12">
                            {this.result}
                        </Col>
                    </Row>
                </Page>
            </>
        );
    }

    private findExams = () => {
        findExams(this.setExams);
        this.result = (
            <div className="center-align">
                <Preloader/>
            </div>
        );
        this.forceUpdate();
    };

    private setExams = (response: ResponseEntity) => {
        if (response.status === 200) {
            this.result = <Table columns={this.columns} data={response.body}/>
        }
        this.forceUpdate();
    };
}

export default Exams;