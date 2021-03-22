import axios from 'axios';
const baseURL = "";
export const HTTP = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})
