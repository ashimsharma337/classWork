import axios from "axios";

const http = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    responseType: "json",
    timeout: 30000,
    timeoutErrorMessage: "Response timeout"
})

const getHeaders = (headers) => {
    let ret_headers = {
        "content-type": "application/json"
    }
    return ret_headers
}

const postItem = (url, data, headers = {}) => {
      let post_headers = getHeaders(headers);
      return http.post({url},{data},{post_headers});
}

const getItem = (url, params = {}) => {
    let post_headers = getHeaders(params);
    return http.get(url, post_headers);
}


export const httpRequest = {
      postItem,
      getItem
};