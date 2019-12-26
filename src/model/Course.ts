interface Course {
    id: number;
    name: string;
    unit: number;
    capacity: number;
    enrollments: number;
    teacher: string;
    sessionsSchedule: string;
    examDateTime: string;
}

export default Course;