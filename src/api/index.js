import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://instasport.co/dashboard/api/v1'
});