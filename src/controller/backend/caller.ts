import Endpoint from "../../model/Endpoint";

export function call(endpoint: Endpoint, pathVariables: any | null, query: string | null, body: any | null, callback: Function) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            callback(
                {
                    status: this.status,
                    body: this.responseText ? JSON.parse(this.responseText) : ""
                }
            );
        }
    };
    let url = endpoint.url;
    if (pathVariables) {
        for (let property in pathVariables) {
            if (pathVariables.hasOwnProperty(property)) {
                url = url.replace(`{${property}}`, pathVariables[property]);
            }
        }
    }
    if (query) {
        url = `${url}?${query}`;
    }
    request.open(endpoint.method, url, true);
    if (body) {
        request.send(JSON.stringify(body));
    } else {
        request.send();
    }
}