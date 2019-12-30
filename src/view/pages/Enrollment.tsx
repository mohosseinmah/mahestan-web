import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Page from "../components/Page";
import Row from "../components/Row";
import Col from "../components/Col";
import Button from "../components/Button";
import CourseIdInput from "../components/CourseIdInput";
import {selectedCourses} from "../../controller/enrollment";
import CourseId from "../../model/CourseId";
import Divider from "../components/Divider";
import Table from "../components/Table";
import {findEnrolledCourses} from "../../controller/backend/client";
import ResponseEntity from "../../model/ResponseEntity";
import MaterialIcon from "../components/MaterialIcon";

class Enrollment extends React.Component {
    private columns: string[] = [
        "شماره درس",
        "نام درس",
        "واحد",
        ""
    ];
    private result: any = null;

    constructor(props: any) {
        super(props);
        this.findCourses();
    }

    render() {
        return (
            <>
                <Breadcrumb items={[{name: "انتخاب واحد"}]}/>
                <Page>
                    <Row>
                        {this.result}
                    </Row>
                    <Divider/>
                    <Row>
                        <Col className="s12">
                            {selectedCourses.map((courseId: CourseId, index: number) => {
                                return (
                                    <CourseIdInput index={index} courseId={courseId}/>
                                );
                            })}
                            <Button className="mr-1" onClick={this.handleAdd}>افزودن سطر جدید</Button>
                            <Button className="green" onClick={this.handleSubmit}>ثبت</Button>
                        </Col>
                    </Row>
                </Page>
            </>
        );
    }

    private findCourses = () => {
        findEnrolledCourses(this.setCourses);
    };

    private setCourses = (response: ResponseEntity) => {
        if (response.status === 200) {
            const data: any[] = this.addRemoveOption(response.body);
            this.result = (
                <Col className="s12">
                    <Table columns={this.columns} data={data}/>
                </Col>
            );
            this.forceUpdate();
        }
    };

    private addRemoveOption = (courses: any[]) => {
        for (let course of courses) {
            course.remove = (
                <div style={{textAlign: "left"}}>
                    <MaterialIcon className="cursor-pointer" iconName="remove_circle"
                                  onClick={this.remove.bind(this, course.id)}/>
                </div>
            );
        }
        return courses;
    };

    private remove = (id: number) => {
        alert(`remove ${id}`);
    };

    private handleAdd = () => {
        selectedCourses.push({});
        this.forceUpdate();
    };

    private handleSubmit = () => {
        alert(JSON.stringify(selectedCourses));
    };
}

export default Enrollment;