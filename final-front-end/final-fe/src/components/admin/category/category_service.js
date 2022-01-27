import { httpRequest } from "../../../services/httpclient";

export class CategoryService{
    addCategory = (data, cb) => {
        httpRequest.postItem("category", data, true)
        .then((response) => {
            // console.log("Response: ", success);
            cb(null, response);
        })
        .catch((error) => {
            console.log("Error: ", error);
        })
    }
}