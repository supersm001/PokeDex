import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: 'http://magical-money.com/',
  timeout: 300000,
});
