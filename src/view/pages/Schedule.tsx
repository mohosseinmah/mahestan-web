import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Page from "../components/Page";
import Row from "../components/Row";
import Col from "../components/Col";
import {findSchedule} from "../../controller/backend/client";
import ResponseEntity from "../../model/ResponseEntity";
import Preloader from "../components/Preloader";

class Schedule extends React.Component {
    private readonly weekDays: any[][];

    constructor(props: any) {
        super(props);
        this.weekDays = [[], [], [], [], []];
        findSchedule(this.setCourses);
    }

    render() {
        return (
            <>
                <Breadcrumb items={[{name: "برنامه هفتگی"}]}/>
                <Page>
                    {this.isScheduleReady() ?
                        <Row>
                            <Col className="s12 center-align schedule-row">
                                <Col className="s1 offset-s2 grey lighten-3 schedule-column">08:00 تا
                                    09:00</Col>
                                <Col className="s1 grey lighten-3 schedule-column">09:00 تا 10:00</Col>
                                <Col className="s1 grey lighten-3 schedule-column">10:00 تا 11:00</Col>
                                <Col className="s1 grey lighten-3 schedule-column">11:00 تا 12:00</Col>
                                <Col className="s1 offset-s1 grey lighten-3 schedule-column">13:30 تا
                                    14:30</Col>
                                <Col className="s1 grey lighten-3 schedule-column">14:30 تا 15:30</Col>
                                <Col className="s1 grey lighten-3 schedule-column">15:30 تا 16:30</Col>
                                <Col className="s1 grey lighten-3 schedule-column">16:30 تا 17:30</Col>
                            </Col>
                            <Col className="s12 schedule-row">
                                <Col className="s2 grey lighten-3 schedule-column">شنبه</Col>
                                {this.weekDays[0]}
                            </Col>
                            <Col className="s12 schedule-row">
                                <Col className="s2 grey lighten-3 schedule-column">یکشنبه</Col>
                                {this.weekDays[1]}
                            </Col>
                            <Col className="s12 schedule-row">
                                <Col className="s2 grey lighten-3 schedule-column">دوشنبه</Col>
                                {this.weekDays[2]}
                            </Col>
                            <Col className="s12 schedule-row">
                                <Col className="s2 grey lighten-3 schedule-column">سه شنبه</Col>
                                {this.weekDays[3]}
                            </Col>
                            <Col className="s12 schedule-row">
                                <Col className="s2 grey lighten-3 schedule-column">چهارشنبه</Col>
                                {this.weekDays[4]}
                            </Col>
                        </Row>
                        :
                        <div className="center-align">
                            <Preloader/>
                        </div>
                    }
                </Page>
            </>
        );
    }

    private isScheduleReady = () => {
        let result: boolean = false;
        for (const weekDay of this.weekDays) {
            if (weekDay.length > 0) {
                result = true;
                break;
            }
        }
        return result;
    };

    private setCourses = (response: ResponseEntity) => {
        if (response.status === 200) {
            const sessions = response.body;
            let currentDay = 0, lastEndingTime = 8;
            let duration = 0, offset = 0;
            for (const session of sessions) {
                if (session.weekDay !== currentDay) {
                    currentDay = session.weekDay;
                    lastEndingTime = 8;
                }
                duration = session.endingTime - session.startingTime;
                offset = session.startingTime - lastEndingTime;
                if (lastEndingTime < 13 && session.startingTime > 13) {
                    offset = Math.floor(offset);
                }
                lastEndingTime = session.endingTime;
                this.weekDays[session.weekDay].push(
                    <Col className={`s${duration} offset-s${offset} schedule-column`}>{session.name}</Col>
                );
            }
        }
        this.forceUpdate();
    };
}

export default Schedule;