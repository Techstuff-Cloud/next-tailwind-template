import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:3000';

// from Cookies
// const token = localStorage.getItem('token') || '';
const token = '123';

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers['Content-Type'] = 'application/json';

    console.log('Request Interceptor:', config);

    return config;
  },
  (error: AxiosError) => {
    console.error('Request Interceptor Error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('Response Interceptor:', response);
    return response;
  },
  (error: AxiosError) => {
    console.error('Response Interceptor Error:', error);
    if (error.response) {
      console.error('Response error:', error.response);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error during request setup:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
