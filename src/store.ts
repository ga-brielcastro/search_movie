import { makeAutoObservable } from "mobx";
import api from "./api";
import * as types from './types';

export class Store {
    constructor() {
        makeAutoObservable(this);
    }

    public result: types.Result[] = [];
    public loading: boolean = false;

    public setMovies(result: types.Result[]) {
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
            const result = await api.getMovies();
            this.setMovies(result);
        } catch(err) {
            console.error({message: err});
        } finally {
            this.setLoading(false);
        }
    }


}