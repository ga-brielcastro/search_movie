import axios from 'axios';

import * as types from '../types';

// API do Studio Ghibli
// const API_BASE = 'https://ghibliapi.herokuapp.com'; //final /films

// API do TMDB
const API_KEY = 'f779fc0eaab43f65ae493c08c987c27b'
const API_BASE = 'https://api.themoviedb.org/3'

class API {

    private base;

    constructor() {
        this.base = axios.create({
            baseURL: API_BASE
        });
    }

    public async getAnimes() : Promise<types.Movie[]> {
        
        const res = await this.base.get<[]>(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)

        return res.data;     
    }
}

const api = new API();

export default api