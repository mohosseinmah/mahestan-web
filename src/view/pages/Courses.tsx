import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Page from "../components/Page";
import Course from "../../model/Course";
import Row from "../components/Row";
import Col from "../components/Col";
import Button from "../components/Button";
import InputField from "../components/InputField";
import {findCourses} from "../../controller/backend/client";
import ResponseEntity from "../../model/ResponseEntity";
import Divider from "../components/Divider";
import Preloader from "../components/Preloader";
import Table from "../components/Table";

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
    private result: any = null;

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
                    {this.result}
                </Page>
            </>
        );
    }

    private findCourses = () => {
        findCourses(this.setCourses);
        this.result = (
            <>
                <Divider/>
                <div className="center-align">
                    <Preloader/>
                </div>
            </>
        );
        this.forceUpdate();
    };

    private setCourses = (response: ResponseEntity) => {
        if (response.status === 200) {
            const courses = response.body as Course[];
            this.result = (
                <>
                    <Divider/>
                    <Row>
                        <Table bordered striped columns={this.columns} data={courses}/>
                    </Row>
                </>
            );
        } else if (response.status === 404) {
            this.result = (
                <>
                    <Divider/>
                    <div className="center-align">
                        <p style={{color: "red"}}>اطلاعاتی یافت نشد.</p>
                    </div>
                </>
            );
        } else {
            this.result = null;
        }
        this.forceUpdate();
    };

    private clear = () => {
        this.result = null;
        this.forceUpdate();
    };
}

export default Courses;