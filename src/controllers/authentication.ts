import User from "../models/User";

let loggedInUser: User | null;

export function authenticate(user: User) {
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