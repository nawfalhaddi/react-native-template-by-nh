import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'},
});

export default axiosInstance;
