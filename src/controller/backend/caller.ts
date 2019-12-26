import Endpoint from "../../model/Endpoint";

export function call(endpoint: Endpoint, callback: Function) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            callback(JSON.parse(this.responseText));
        }
    };
    request.open(endpoint.method, endpoint.url, true);
    request.send();
}