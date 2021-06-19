import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://fakestoreapi.com/',
  timeout: 15000,
});

export default Api;
