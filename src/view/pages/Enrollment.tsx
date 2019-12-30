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
import {enrollCourses, findEnrolledCourses} from "../../controller/backend/client";
import ResponseEntity from "../../model/ResponseEntity";
import MaterialIcon from "../components/MaterialIcon";
import Preloader from "../components/Preloader";

class Enrollment extends React.Component {
    private columns: string[] = [
        "شماره درس",
        "نام درس",
        "واحد",
        ""
    ];
    private result: any = null;
    private enrolledCoursesCount: number = 0;

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
                        <Col className="s4">حداقل تعداد واحد مجاز: 12</Col>
                        <Col className="s4">حداکثر تعداد واحد مجاز: 20</Col>
                        <Col className="s4">تعداد واحد اخذ شده:&nbsp;{this.enrolledCoursesCount}</Col>
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
        this.enrolledCoursesCount = 0;
        this.result = (
            <div className="center-align">
                <Preloader/>
            </div>
        );
        this.forceUpdate();
    };

    private setCourses = (response: ResponseEntity) => {
        if (response.status === 200) {
            this.enrolledCoursesCount = this.countUnits(response.body);
            const data: any[] = this.addRemoveOption(response.body);
            this.result = (
                <Col className="s12 mt-2">
                    <Table columns={this.columns} data={data}/>
                </Col>
            );
            this.forceUpdate();
        }
    };

    private countUnits = (courses: any[]) => {
        let units = 0;
        for (let course of courses) units += course.unit;
        return units;
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
        const selectedCourseIds: string[] = [];
        for (let courseId of selectedCourses) {
            if (courseId.faculty && courseId.department && courseId.number && courseId.group) {
                selectedCourseIds.push(`${courseId.faculty}${courseId.department}${courseId.number}${courseId.group}`);
            }
        }
        enrollCourses(this.afterEnroll, selectedCourseIds);
    };

    private afterEnroll = (response: ResponseEntity) => {
        if (response.status === 204) {
            selectedCourses.length = 0;
            selectedCourses.push({});
            this.findCourses();
        }
    };
}

export default Enrollment;