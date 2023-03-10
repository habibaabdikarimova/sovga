import axios from 'axios';

export const instance = axios.create({
    baseURL: "http://3.19.30.204/",
    timeout: 10000,
})

