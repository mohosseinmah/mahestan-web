import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Page from "../components/Page";
import Table from "../components/Table";
import Course from "../../model/Course";

class Courses extends React.Component {
    render() {
        const columns: string[] = [
            "شماره درس",
            "نام درس",
            "واحد",
            "ظرفیت",
            "ثبت نام شده",
            "استاد",
            "زمان و مکان ارائه",
            "زمان و مکان امتحان"
        ];
        const courses: Course[] = [
            {
                id: 121201101,
                name: "جبر خطی عددی",
                unit: 3,
                capacity: 40,
                enrollments: 21,
                teacher: "جمشید سعیدیان",
                sessionsSchedule: "درس(ت): شنبه ۰۸:۰۰-۱۰:۰۰ مکان: ۲۰۶-طبقه اول سمت چپ، درس(ت): دو شنبه ۱۵:۳۰-۱۶:۳۰ مکان: ۲۰۶-طبقه اول سمت چپ، حل تمرين(ت): دو شنبه ۱۶:۳۰-۱۷:۳۰ مکان: ۲۰۶-طبقه اول سمت چپ",
                examDateTime: "تاريخ: ۱۳۹۸/۱۰/۲۵ ساعت: ۰۸:۰۰-۱۰:۰۰"
            },
            {
                id: 121201501,
                name: "طراحی و تحلیل الگوریتم ها",
                unit: 3,
                capacity: 40,
                enrollments: 40,
                teacher: "آرش احدی",
                sessionsSchedule: "درس(ت): سه شنبه ۰۸:۰۰-۰۹:۰۰ مکان: ۲۰۶-طبقه اول سمت چپ، درس(ت): سه شنبه ۱۳:۳۰-۱۵:۳۰ مکان: ۲۰۶-طبقه اول سمت چپ، حل تمرين(ت): سه شنبه ۰۹:۰۰-۱۰:۰۰ مکان: ۲۰۶-طبقه اول سمت چپ",
                examDateTime: "تاريخ: ۱۳۹۸/۱۱/۰۵ ساعت: ۰۸:۰۰-۱۰:۰۰"
            },
            {
                id: 121202501,
                name: "زبان های برنامه سازی",
                unit: 3,
                capacity: 50,
                enrollments: 50,
                teacher: "سمیه عربی نرئی",
                sessionsSchedule: "درس(ت): شنبه ۱۰:۰۰-۱۲:۰۰ مکان: ۲۰۶-طبقه اول سمت چپ، درس(ت): يك شنبه ۱۳:۳۰-۱۴:۳۰ مکان: ۲۰۶-طبقه اول سمت چپ، حل تمرين(ت): يك شنبه ۱۴:۳۰-۱۵:۳۰ مکان: ۲۰۶-طبقه اول سمت چپ",
                examDateTime: "تاريخ: ۱۳۹۸/۱۰/۲۸ ساعت: ۱۰:۰۰-۱۲:۰۰"
            },
            {
                id: 121203001,
                name: "نرم افزار ریاضی",
                unit: 3,
                capacity: 20,
                enrollments: 18,
                teacher: "مجید محمدزاده",
                sessionsSchedule: "درس(ت): يك شنبه ۱۳:۳۰-۱۵:۳۰ مکان: ۱۰۳- طبقه همكف سمت چپ، درس(ت): سه شنبه ۱۰:۰۰-۱۱:۰۰ مکان: ۱۰۳- طبقه همكف سمت چپ",
                examDateTime: "تاريخ: ۱۳۹۸/۱۰/۲۴ ساعت: ۰۸:۰۰-۱۰:۰۰"
            },
            {
                id: 121203002,
                name: "نرم افزار ریاضی",
                unit: 3,
                capacity: 20,
                enrollments: 20,
                teacher: "مجید محمدزاده",
                sessionsSchedule: "درس(ت): يك شنبه ۱۰:۰۰-۱۲:۰۰ مکان: ۱۰۳- طبقه همكف سمت چپ، درس(ت): سه شنبه ۱۱:۰۰-۱۲:۰۰ مکان: ۱۰۳- طبقه همكف سمت چپ",
                examDateTime: "تاريخ: ۱۳۹۸/۱۰/۲۴ ساعت: ۰۸:۰۰-۱۰:۰۰"
            }
        ];
        return (
            <>
                <Breadcrumb items={[{name: "لیست دروس"}]}/>
                <Page>
                    <Table bordered striped columns={columns} data={courses}/>
                </Page>
            </>
        );
    }
}

export default Courses;