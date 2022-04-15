import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api',
    // process.env.NODE_ENV === 'development'
    //   ? 'http://localhost:4000/api'
    //   : 'https://themrzlyv.herokuapp.com/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    creditials: 'include',
  },
});

export default API;
