import axios from 'axios'

export const BASE_URL = 'http://localhost:8080';

export const API_URL = `${BASE_URL}`;

axios.defaults.baseURL = API_URL;


export const getAllShifts = (startDate: string, direction: number) => axios.get(`/shifts?date=${startDate}&direction=${direction}`);
