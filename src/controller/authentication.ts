import Student from "../model/Student";

let loggedInUser: Student;

export function authenticate(user: Student) {
    window.sessionStorage.setItem("user", JSON.stringify(user));
    loggedInUser = user;
}

export function logout() {
    window.sessionStorage.removeItem("user");
    loggedInUser = {field: "", firstName: "", id: "", lastName: "", password: ""};
}

export function getCurrentUser() {
    return loggedInUser;
}

export function isAuthenticated() {
    return loggedInUser != null;
}

export function isNotAuthenticated() {
    return loggedInUser == null;
}