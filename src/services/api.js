import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/550?api_key=d1d878df0c3e13b99b495fd57bf45ea4


const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;