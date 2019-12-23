import User from "../models/User";

let loggedInUser: User;

export function authenticate(user: User) {
    window.sessionStorage.setItem("user", JSON.stringify(user));
    loggedInUser = user;
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