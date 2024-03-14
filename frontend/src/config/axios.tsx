import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/v1/"
});

axiosClient.interceptors.response.use(
    response => response,
    error => {
        console.error("Request Error:", error);
        alert("Something went wrong");
        return Promise.reject(error);
    }
);

export function getRequest(URL: string) {
    return axiosClient.get(`/${URL}`)
        .then(response => response)
}

export function postRequest(URL: string, payload: any = undefined) {
    return axiosClient.post(`/${URL}`, payload !== undefined ? payload : {})
        .then(response => response);
}


