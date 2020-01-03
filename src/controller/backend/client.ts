import {call} from "./caller";
import {
    coursesEndpoint,
    enrollCourseEndpoint,
    loginEndpoint,
    removeCourseEndpoint,
    studentCoursesEndpoint,
    studentExamsEndpoint,
    studentScheduleEndpoint
} from "./endpoints";
import {getCurrentUser} from "../authentication";

export function login(callback: Function, id: string, password: string) {
    call(loginEndpoint, null, null, {id: id, password: password}, callback);
}

export function findCourses(callback: Function, faculty: string, department: string, number: string, group: string, size: number, page: number) {
    const queryParameters = [];
    if (faculty) queryParameters.push(`faculty=${faculty}`);
    if (department) queryParameters.push(`department=${department}`);
    if (number) queryParameters.push(`number=${department}`);
    if (group) queryParameters.push(`group=${department}`);
    if (size) queryParameters.push(`size=${size}`);
    if (page) queryParameters.push(`page=${page}`);
    call(coursesEndpoint, null, queryParameters.join("&"), null, callback);
}

export function findEnrolledCourses(callback: Function) {
    call(studentCoursesEndpoint, getStudentIdPathVariable(), null, null, callback);
}

export function enrollCourses(callback: Function, courseIds: string[]) {
    call(enrollCourseEndpoint, getStudentIdPathVariable(), null, courseIds, callback);
}

export function removeCourse(callback: Function, courseId: string) {
    const pathVariables: any = getStudentIdPathVariable();
    pathVariables["course-id"] = courseId;
    call(removeCourseEndpoint, pathVariables, null, null, callback);
}

export function findSchedule(callback: Function) {
    call(studentScheduleEndpoint, getStudentIdPathVariable(), null, null, callback);
}

export function findExams(callback: Function) {
    call(studentExamsEndpoint, getStudentIdPathVariable(), null, null, callback);
}

function getStudentIdPathVariable() {
    return {"student-id": getCurrentUser().id};
}
