import axios from 'axios';
const baseURL = import.meta.env.VITE_API_ENDPOINT;
console.log(baseURL)

const api = axios.create({
    baseURL,
});

export const fetchMeta = (url) => api.get(`api/meta?url=${url}`);
