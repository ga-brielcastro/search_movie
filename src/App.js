import React, { useState, useEffect } from 'react';

import SearchInput from './components/SearchInput';
import Pagination from './components/Pagination';
import Tmbd from './Tmdb';

import './App.css'
import Tmdb from './Tmdb';

// Informações importantes para a requisição das informações >>>>>>>>>>>>
// const API_KEY = 'f779fc0eaab43f65ae493c08c987c27b';
// const API_BASE = 'https://api.themoviedb.org/3';
const API_IMG = 'https://image.tmdb.org/t/p/w300';
const LIMIT = 20; //Limites de itens por pagina

const App = () => {

    const [text, setText] = useState('');
    const [info, setInfo] = useState({});
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setInfo({});

        if (text) {

            Tmdb.getMovies(text)
                .then((response) => response.json())
                .then((response) => {
                    setInfo(response)
                });

        } else {
            Tmdb.getTopMovies()
                .then((response) => response.json())
                .then((response) => {
                    setInfo(response)
                });
        }


    }, [text, offset]); 

    return (
        <div className="App">
            <SearchInput
                value={text}
                onChange={(search) => setText(search)}
            />

           
            {text && !info.results && <span className="loading">Buscando</span>}


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
            

            {info.results && (
                console.log('Obteve resultados'),
                <Pagination
                    limit={LIMIT}
                    total={info.total_pages}
                    offset={offset}
                    setOffset={setOffset} />
                
            )}

            <footer>
                Feito por Gabriel S. Castro
                    <span>
                        <br/><a href="https://www.linkedin.com/in/gabrielsouzacastro/">
                            LinkedIn
                        </a>  
                        <br/><a href="https://www.github.com/users/castro-gabriel/">
                            GitHub
                        </a>
                    </span>
                    <br />
                Dados pegos do site themoviedb.org
            </footer>

        </div>
    );

}

export default App;