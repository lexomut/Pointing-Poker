import axios from 'axios';

// const baseURL = 'http://localhost:5000';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/1',
    timeout: 5000,
});

export default instance;
