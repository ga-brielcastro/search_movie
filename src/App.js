import React, { useState, useEffect } from 'react';

import './App.css'

import SearchInput from './components/SearchInput';
import Pagination from './components/Pagination';
import Tmbd from './tmdb';

// Informações importantes para a requisição das informações >>>>>>>>>>>>
const API_KEY = 'f779fc0eaab43f65ae493c08c987c27b';
const API_BASE = 'https://api.themoviedb.org/3';
const API_IMG = 'https://image.tmdb.org/t/p/w300';
const LIMIT = 20; //Limites de itens por pagina

const App = () => {

    const [text, setText] = useState('');
    const [info, setInfo] = useState({});
    console.log(info.results)

    useEffect(() => {
        if (text) {
            setInfo({});

            fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&query=${text}`)
                .then((response) => response.json())
                .then((response) =>{
                    setInfo(response);
                });
            
        }
    }, [text]);
    
    return (
        <div className="App">
            <SearchInput 
                value={text} 
                onChange={(search) => setText(search)}
            />


            {text && !info.results && (
                <span className="loading">Carregando...</span>
            )}

            {info.results && (
                <ul className="movies_list">
                    {info.results.map((movie) => (
                        <li key={movie.id}>
                            <img src={`${API_IMG}${movie.poster_path}`} alt={movie.original_title} />
                            <span>{movie.original_title}</span>
                        </li>   
                    ))}
                </ul>
            )}

            <Pagination limit={LIMIT} total={1200} offset={600} />

        </div>
    );

}

export default App ;