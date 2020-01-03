import Endpoint from "../../model/Endpoint";

const hostUrl = "https://36a4a4bb-50fa-4883-a3ee-e24cc1bf795d.mock.pstmn.io";

export const loginEndpoint: Endpoint = {
    method: "POST",
    url: `${hostUrl}/login`
};

export const coursesEndpoint: Endpoint = {
    method: "GET",
    url: `${hostUrl}/courses`
};

export const studentEnrolledCoursesEndpoint: Endpoint = {
    method: "GET",
    url: `${hostUrl}/students/{student-id}/enrolled-courses`
};

export const enrollCourseEndpoint: Endpoint = {
    method: "POST",
    url: `${hostUrl}/students/{student-id}/enroll`
};

export const removeCourseEndpoint: Endpoint = {
    method: "DELETE",
    url: `${hostUrl}/students/{student-id}/enroll`
};

export const studentScheduleEndpoint: Endpoint = {
    method: "GET",
    url: `${hostUrl}/students/{student-id}/schedule`
};

export const studentExamsEndpoint: Endpoint = {
    method: "GET",
    url: `${hostUrl}/students/{student-id}/exams`
};