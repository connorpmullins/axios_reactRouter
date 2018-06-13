import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
});

axios.defaults.headers.common['Authorization'] = 'INSTANCE AUTH';

export default instance;