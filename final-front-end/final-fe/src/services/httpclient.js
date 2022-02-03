import axios from "axios";
import { resolvePath } from "react-router-dom";

const http = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    responseType: "json",
    timeout: 30000,
    timeoutErrorMessage: "Response timeout"
})

const getHeaders = (headers) => {
    let ret_headers = {
        "content-type": "application/json"
    };
    return ret_headers
}

const postItem = (url, data, is_restrict=false, headers = {}) => {
      let post_headers = getHeaders(headers);
      if(is_restrict){
        post_headers.headers = {
            "authorization": localStorage.getItem("_at")
        }
      }
      return http.post(url, data, post_headers);
}

const getItem = (url, is_strict = false) => {


    let post_headers = getHeaders();
    if(is_strict){
        post_headers.headers = {
            "authorization": localStorage.getItem("_at")
        }
    }
    return http.get(url, post_headers);
}

const deleteItem = (url, is_strict=false) => {
    let headers = getHeaders();
    if(is_strict){
        headers.headers = {
            "authorization": localStorage.getItem("_at")
        }
    }
    return http.delete(url, headers);
}

const getItemById = (url, is_strict=false) => {
    let headers = getHeaders();
    if(is_strict){
        headers.headers = {
            "authorization": localStorage.getItem("_at")
        }
    }
    return http.get(url, headers);
}

const updateById = (url, data, is_strict=false) => {
    let headers = getHeaders();
    if(is_strict){
        headers.headers = {
            "authorization": localStorage.getItem("_at")
        }
    }
    return http.put(url, data, headers);
}

const uploader = (method, url, data, file, is_strict=false) => {
    return new Promise((res, rej) => {
        let xhr = new XMLHttpRequest();
        let formData = new FormData();

        // file data
        file.map((obj) => {
            formData.append("image", obj, obj.name);
        })

        // other fields
        for(let key in data){
            formData.append(key, data[key])
        }

        xhr.onreadystatechange = () => {
            // console.log("State: ", xhr.readyState);
            // console.log("Response: ", xhr.response);
            if(xhr.readyState == 4){
                let response = JSON.parse(xhr.response);
                if(response.status == 200){
                    res(response);
                } else {
                    rej(response);
                }
            }
        }

        xhr.open(method, `${process.env.REACT_APP_BASE_URL}/`+url);
        if(is_strict){
            xhr.setRequestHeader("authorization", localStorage.getItem("_at"));
        }
        xhr.send(formData);
    });
}


export const httpRequest = {
      postItem,
      getItem,
      deleteItem,
      getItemById,
      updateById,
      uploader
};