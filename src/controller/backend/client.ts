import {call} from "./caller";
import {coursesEndpoint, studentEnrolledCoursesEndpoint} from "./endpoints";
import {getCurrentUser} from "../authentication";

export function findCourses(setCourses: Function, faculty: string, department: string, number: string, group: string, size: number, page: number) {
    const queryParameters = [];
    if (faculty) queryParameters.push(`faculty=${faculty}`);
    if (department) queryParameters.push(`department=${department}`);
    if (number) queryParameters.push(`number=${department}`);
    if (group) queryParameters.push(`group=${department}`);
    if (size) queryParameters.push(`size=${size}`);
    if (page) queryParameters.push(`page=${page}`);
    call(coursesEndpoint, null, queryParameters.join("&"), setCourses);
}

export function findEnrolledCourses(setCourses: Function) {
    let pathVariables = null;
    const currentUser = getCurrentUser();
    if (currentUser !== null) pathVariables = {"student-id": currentUser.id};
    call(studentEnrolledCoursesEndpoint, pathVariables, null, setCourses);
}

export function enrollCourses(callback: Function, courseIds: string[]) {

}