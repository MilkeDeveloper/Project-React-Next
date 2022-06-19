import axios from 'axios';

export const ApiService = axios.create({
    baseURL: 'https://frozen-journey-20121.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
})