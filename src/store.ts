import { makeAutoObservable } from "mobx";
import api from "./api";
import * as types from './types';

export class Store {
    constructor() {
        makeAutoObservable(this);
    }

    public result : types.Movie[] = [];
    public loading: boolean = false;

    public setMovies(result: types.Movie[]) {
        this.result = result;
    }

    public setLoading(loading: boolean) {
        this.loading = loading;
    }

    public fetch = async () => {

        if(this.loading) {
            return;
        }

        this.setLoading(true);
        
        try{
            const result = await api.getAnimes();
            this.setMovies(result);
        } catch(err) {
            console.error({message: err});
        } finally {
            this.setLoading(false);
        }
    }


}