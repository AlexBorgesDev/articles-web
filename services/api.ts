import axios from 'axios';

export const baseURL = 'http://localhost:3000';
export const baseFilesURL = `${baseURL}/files/`;

const api = axios.create({ baseURL });

export default api;
