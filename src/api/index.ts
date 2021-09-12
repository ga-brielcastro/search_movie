import axios from 'axios';

import * as types from '../types';


const API_KEY = 'f779fc0eaab43f65ae493c08c987c27b';
const API_BASE = 'https://api.themoviedb.org/3';

class API {

    private base;

    constructor() {
        this.base = axios.create({
            baseURL: API_BASE
        });
    }

    public async getMovies() : Promise<types.Result[]> {
        const res = this.base.get<types.Result[]>(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`);
        return (await res).data;
    }
}

const api = new API();

export default api