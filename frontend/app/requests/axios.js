const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:8092/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const profile = () => instance('/profile');