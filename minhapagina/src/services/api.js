import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=183e52d87b0d6e6b05b38d3d9b6946c3


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;