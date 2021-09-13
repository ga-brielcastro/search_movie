import axios from 'axios';

import * as types from '../types';

const API_BASE = 'https://ghibliapi.herokuapp.com';


class API {

    private base;

    constructor() {
        this.base = axios.create({
            baseURL: API_BASE
        });
    }

    public async getAnimes() : Promise<types.Animes[]> {
        const res = await this.base.get<types.Animes[]>('/films')
        .then( r => r.data).then(x => x);

        return res;
    }
}

const api = new API();

export default api