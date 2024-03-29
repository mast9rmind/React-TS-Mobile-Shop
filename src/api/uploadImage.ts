import { UPLOAD_IMAGE } from "configs/url.config";
import http from 'services/http.services';

export async function UploadImage(data: Object, config: Object) {
    try {
        let config = {
            headers: {
                token: localStorage.getItem("ACCESS_TOKEN"),
            },
        }
        const response = await http.post(UPLOAD_IMAGE, data, config);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}