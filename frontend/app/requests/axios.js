import config from '../config.json';

const axios = require('axios');

const instance = axios.create({
  baseURL: config.backendUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const profile = () => instance('/profile');