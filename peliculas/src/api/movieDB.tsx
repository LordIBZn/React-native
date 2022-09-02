import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'e1d94a1613a2d544d4d179faa4e487ea',
        language: 'es-ES',
    }
});

export default movieDB;