import axios from 'axios';

export const getClubs = () => axios.get('https://instasport.co/dashboard/api/v1/clubs/');