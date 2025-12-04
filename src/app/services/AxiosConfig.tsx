import axios from 'axios';

const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eWV1bGFpcWd1Y25paHNwcHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NTM4MzUsImV4cCI6MjA4MDMyOTgzNX0.AIjodA394TaNtxrqWHQWd_fM5scmrw801EYPfzplG6g';

const ApiClient = axios.create({
  baseURL: 'https://xxyeulaiqgucnihsppum.supabase.co',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    apikey: SUPABASE_KEY,
  },
});

ApiClient.interceptors.request.use(
  async config => {
    console.log('Request Config:', config);

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

ApiClient.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  async error => {
    console.log('Error:', error);
    return Promise.reject(error);
  },
);

export default ApiClient;
