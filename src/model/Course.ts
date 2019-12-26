interface Course {
    id: string;
    name: string;
    unit: number;
    capacity: number;
    enrollments: number;
    teacher: string;
    sessionsSchedule: string;
    examDateTime: string;
}

export default Course;