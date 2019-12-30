import Student from "../model/Student";

let loggedInUser: Student | null;

export function authenticate(user: Student) {
    window.sessionStorage.setItem("user", JSON.stringify(user));
    loggedInUser = user;
}

export function logout() {
    window.sessionStorage.removeItem("user");
    loggedInUser = null;
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