import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://192.168.1.66:3000/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;