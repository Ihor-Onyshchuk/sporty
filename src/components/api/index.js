import axios from 'axios';

export const getClubs = () => {
  const apiUrl = 'https://instasport.co/dashboard/api/v1/clubs/';
  return axios.get(apiUrl);
};