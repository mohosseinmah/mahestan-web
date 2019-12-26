import {call} from "./caller";
import {coursesEndpoint} from "./endpoints";

export function findCourses(setCourses: Function) {
    call(coursesEndpoint, setCourses);
}