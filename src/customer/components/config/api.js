import axios from 'axios';

export const API_URL="http://localhost:5454";
export const DEPLOYED_URL="https://foodrush-backend-production.up.railway.app/"

export const api = axios.create({
    baseURL: DEPLOYED_URL, 
    headers: {
      'Content-Type': 'application/json',
    },
  });
  