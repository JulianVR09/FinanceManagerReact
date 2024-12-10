import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://192.168.89.59:3000/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;