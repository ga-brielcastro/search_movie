import { makeAutoObservable } from "mobx";
import api from "./api";
import * as types from './types';

export class Store {
    constructor() {
        makeAutoObservable(this);
    }

    public movies: types.Movie[] = [];
    public loading: boolean = false;

    public setMovies(movies: types.Movie[]) {
        this.movies = movies;
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
            const movies = await api.getMovies();
            this.setMovies(movies);
        } catch(err) {
            console.error({message: err});
        } finally {
            this.setLoading(false);
        }
    }


}