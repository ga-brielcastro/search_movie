import React from 'react';
import * as types from './types';

import SearchInput from './components/SearchInput';
import Pagination from './components/Pagination';

import './App.css'
import api from './api';
import { Movie } from './types';

const API_IMG = 'https://image.tmdb.org/t/p/w300';

const App = () => {

    const [text, setText] = React.useState('');
    const [info, setInfo] = React.useState({});
    const [offset, setOffset] = React.useState(0);

    const [data, setData] = React.useState<types.Movie[]>();

    React.useEffect( () => {
        const fetch = async () => {
            setData(await api.getMovies())
        }

        fetch();
    }, [])
  
    var x = data;

    return (

        <div className="App">
            <SearchInput
                value={text}
                onChange={() => setText('')}
            />
           


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