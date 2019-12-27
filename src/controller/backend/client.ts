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