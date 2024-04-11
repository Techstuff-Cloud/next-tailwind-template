import axios, { AxiosError } from 'axios';
import cookie from 'js-cookie';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

api.interceptors.request.use(async (config) => {
  try {
    const token = cookie.get('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers['Content-Type'] = 'application/json';

    // console.log('Request Interceptor:', config);

    return config;
  } catch (error) {
    console.error('Request Interceptor Error:', error);
    return Promise.reject(error);
  }
});

api.interceptors.response.use(
  (response) => {
    // console.log('Response Interceptor:', response);
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
