import axios from "axios";

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    timeout: 100000,
    headers: {
        "Content-Type": "application/json",
    },
});

client.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

client.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (!error.response) {
            throw new Error("Error Connection");
        }
        if (error.response.status === 401) {
            window.localStorage.clear();
            let authType = client.defaults.headers.common.AuthType ?? "admin";
            myHistory.replace(`/${authType}/login`); // Usage example.
            window.location.reload();
        }

        return Promise.reject(error.response.data);
    }
);

export { client };
