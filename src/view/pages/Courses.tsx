import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Page from "../components/Page";
import Table from "../components/Table";
import Course from "../../model/Course";
import Row from "../components/Row";
import Col from "../components/Col";
import Button from "../components/Button";
import InputField from "../components/InputField";
import {findCourses} from "../../controller/backend/client";
import ResponseEntity from "../../model/ResponseEntity";

class Courses extends React.Component<any, any> {
    private columns: string[] = [
        "شماره درس",
        "نام درس",
        "واحد",
        "ظرفیت",
        "ثبت نام شده",
        "استاد",
        "زمان و مکان ارائه",
        "زمان و مکان امتحان"
    ];
    private courses: Course[] = [];

    render() {
        return (
            <>
                <Breadcrumb items={[{name: "لیست دروس"}]}/>
                <Page>
                    <Row>
                        <form>
                            <Col className="s3">
                                <InputField id="daneshkadeh" type="number" className="inline" label="دانشکده درس"/>
                            </Col>
                            <Col className="s3">
                                <InputField id="gorouheamouzeshi" type="number" className="inline"
                                            label="گروه آموزشی درس"/>
                            </Col>
                            <Col className="s3">
                                <InputField id="shomare" type="number" className="inline" label="شماره درس"/>
                            </Col>
                            <Col className="s3">
                                <InputField id="gorouh" type="number" className="inline" label="گروه درس"/>
                            </Col>
                        </form>
                        <Col className="s12 right-align">
                            <Button className="red mb-1 mr-1" onClick={this.clear}>پاک کردن</Button>
                            <Button className="mb-1 mr-1" onClick={this.findCourses}>مشاهده</Button>
                        </Col>
                    </Row>
                    {
                        this.courses.length > 0 &&
                        (<>
                            <br/>
                            <Row>
                                <Table bordered striped columns={this.columns} data={this.courses}/>
                            </Row>
                        </>)
                    }
                </Page>
            </>
        );
    }

    private findCourses = () => {
        findCourses(this.setCourses)
    };

    private setCourses = (response: ResponseEntity) => {
        if (response.status === 200) {
            this.courses = response.body as Course[];
            this.forceUpdate();
        }
    };

    private clear = () => {
        this.courses = [];
        this.forceUpdate();
    };
}

export default Courses;