import axios from 'axios';

import * as types from '../types';

// API do Studio Ghibli
const API_BASE = 'https://ghibliapi.herokuapp.com';


class API {

    private base;

    constructor() {
        this.base = axios.create({
            baseURL: API_BASE
        });
    }

    public async getAnimes() : Promise<types.Animes[]> {
        const res = await this.base.get<types.Animes[]>(`/films`)
        
        return res.data;
    }
}

const api = new API();

export default api