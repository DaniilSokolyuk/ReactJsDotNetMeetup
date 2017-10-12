export const APIActions = Object.freeze({
    SEARCH: 'Search',
    GET_USER: 'GetUser',
});

export default function api(action, data) {

    let xhr = new XMLHttpRequest();

    // Default method
    let method = 'GET';

    // Default expected status
    let expectedStatus = 200;

    // Default request header
    let requestHeaderKey = 'Content-type';
    let requestHeaderValue = 'application/json';

    let params = null;
    let url;

    switch (action) {

        case APIActions.SEARCH:
            url = '/Home/Search/?text=' + data;
            break;

        case APIActions.GET_USER:
            url = '/Home/User/?userName=' + data;
            break;
    }

    return new Promise((resolve, reject) => {
        xhr.open(method, url, true);
        xhr.setRequestHeader(requestHeaderKey, requestHeaderValue);
        xhr.onload = function () {
            if (this.status === expectedStatus) {
                resolve(this.response);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error('Network Error'));
        };
        xhr.send(params);
    });
}
