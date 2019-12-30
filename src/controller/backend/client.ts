import {call} from "./caller";
import {coursesEndpoint} from "./endpoints";

export function findCourses(setCourses: Function, faculty: string, department: string, number: string, group: string, size: number, page: number) {
    const queryParameters = [];
    if (faculty) queryParameters.push(`faculty=${faculty}`);
    if (department) queryParameters.push(`department=${department}`);
    if (number) queryParameters.push(`number=${department}`);
    if (group) queryParameters.push(`group=${department}`);
    if (size) queryParameters.push(`size=${size}`);
    if (page) queryParameters.push(`page=${page}`);
    call(coursesEndpoint, queryParameters.join("&"), setCourses);
}

export function findEnrolledCourses(callback: Function) {
    callback({
        status: 200,
        body: [
            {
                id: "121114601",
                name: "مبانی جامعه شناسی",
                unit: 2
            },
            {
                id: "121202501",
                name: "زبان های برنامه سازی",
                unit: 3
            },
            {
                id: "121203002",
                name: "نرم افزار ریاضی",
                unit: 3
            },
            {
                id: "121204501",
                name: "هوش مصنوعی",
                unit: 3
            },
            {
                id: "121206601",
                name: "پایگاه داده ها",
                unit: 3
            },
            {
                id: "141408001",
                name: "مباحث اساسی در روانشناسی",
                unit: 2
            },
            {
                id: "901202412",
                name: "جمعیت و دانش خانواده",
                unit: 2
            },
            {
                id: "901502305",
                name: "مهارت های زندگی دانشجویی",
                unit: 2
            }
        ]
    });
}