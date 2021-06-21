import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: 'http://magical-money.com/',
  timeout: 300000,
});
export const AxiosInstance2 = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 300000,
});
