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
import Pagination from "../components/Pagination";

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
                                <InputField id="faculty" type="number" className="inline" label="دانشکده درس"/>
                            </Col>
                            <Col className="s3">
                                <InputField id="department" type="number" className="inline"
                                            label="گروه آموزشی درس"/>
                            </Col>
                            <Col className="s3">
                                <InputField id="number" type="number" className="inline" label="شماره درس"/>
                            </Col>
                            <Col className="s3">
                                <InputField id="group" type="number" className="inline" label="گروه درس"/>
                            </Col>
                        </form>
                        <Col className="s12 right-align">
                            <Button className="red mb-1 mr-1" onClick={this.clear}>پاک کردن</Button>
                            <Button className="mb-1 mr-1" onClick={this.findCourses.bind(this, 1)}>مشاهده</Button>
                        </Col>
                    </Row>
                    {this.result}
                </Page>
            </>
        );
    }

    private findCourses = (page: number) => {
        const getInputValue = function (id: string): string {
            const inputElement = document.getElementById(id) as HTMLInputElement;
            if (inputElement) return inputElement.value;
            return "";
        };
        const faculty: string = getInputValue("faculty");
        const department: string = getInputValue("department");
        const number: string = getInputValue("number");
        const group: string = getInputValue("group");

        findCourses(this.setCourses, faculty, department, number, group, 5, page);

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
            const courses = response.body.content as Course[];
            this.result = (
                <>
                    <Divider/>
                    <Row>
                        <Table bordered striped columns={this.columns} data={courses}/>
                        <Col className="s12 mt-2">
                            <Pagination size={response.body.totalPages} page={response.body.currentPage} callback={this.findCourses}/>
                        </Col>
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