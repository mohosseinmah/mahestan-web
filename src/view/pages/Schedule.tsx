import React, {CSSProperties} from "react";
import Breadcrumb from "../components/Breadcrumb";
import Page from "../components/Page";
import Row from "../components/Row";
import Col from "../components/Col";
import {findSchedule} from "../../controller/backend/client";
import ResponseEntity from "../../model/ResponseEntity";
import Preloader from "../components/Preloader";

class Schedule extends React.Component {
    private readonly weekDays: any[][];

    private readonly border: string;
    private readonly rowStyle: CSSProperties;
    private readonly columnStyle: CSSProperties;

    constructor(props: any) {
        super(props);
        this.weekDays = [[], [], [], [], []];

        this.border = "0.5px solid";
        this.rowStyle = {borderTop: this.border, borderBottom: this.border};
        this.columnStyle = {
            borderRight: this.border,
            borderLeft: this.border,
            height: "70px",
            overflow: "hidden"
        };

        findSchedule(this.setCourses);
    }

    render() {
        return (
            <>
                <Breadcrumb items={[{name: "برنامه هفتگی"}]}/>
                <Page>
                    {this.isScheduleReady() ?
                        <Row>
                            <Col className="s12 center-align" style={this.rowStyle}>
                                <Col className="s1 offset-s2 grey lighten-3" style={this.columnStyle}>08:00 تا
                                    09:00</Col>
                                <Col className="s1 grey lighten-3" style={this.columnStyle}>09:00 تا 10:00</Col>
                                <Col className="s1 grey lighten-3" style={this.columnStyle}>10:00 تا 11:00</Col>
                                <Col className="s1 grey lighten-3" style={this.columnStyle}>11:00 تا 12:00</Col>
                                <Col className="s1 offset-s1 grey lighten-3" style={this.columnStyle}>13:30 تا
                                    14:30</Col>
                                <Col className="s1 grey lighten-3" style={this.columnStyle}>14:30 تا 15:30</Col>
                                <Col className="s1 grey lighten-3" style={this.columnStyle}>15:30 تا 16:30</Col>
                                <Col className="s1 grey lighten-3" style={this.columnStyle}>16:30 تا 17:30</Col>
                            </Col>
                            <Col className="s12" style={this.rowStyle}>
                                <Col className="s2 grey lighten-3" style={this.columnStyle}>شنبه</Col>
                                {this.weekDays[0]}
                            </Col>
                            <Col className="s12" style={this.rowStyle}>
                                <Col className="s2 grey lighten-3" style={this.columnStyle}>یکشنبه</Col>
                                {this.weekDays[1]}
                            </Col>
                            <Col className="s12" style={this.rowStyle}>
                                <Col className="s2 grey lighten-3" style={this.columnStyle}>دوشنبه</Col>
                                {this.weekDays[2]}
                            </Col>
                            <Col className="s12" style={this.rowStyle}>
                                <Col className="s2 grey lighten-3" style={this.columnStyle}>سه شنبه</Col>
                                {this.weekDays[3]}
                            </Col>
                            <Col className="s12" style={this.rowStyle}>
                                <Col className="s2 grey lighten-3" style={this.columnStyle}>چهارشنبه</Col>
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
                    offset = Math.floor(offset) + 1;
                }
                lastEndingTime = session.endingTime;
                this.weekDays[session.weekDay].push(
                    <Col className={`s${duration} offset-s${offset}`} style={this.columnStyle}>{session.name}</Col>
                );
            }
        }
        this.forceUpdate();
    };
}

export default Schedule;