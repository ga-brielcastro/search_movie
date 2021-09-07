import React from 'react';
import { useLocalObservable, observer } from 'mobx-react-lite';

import SearchInput from './components/SearchInput';

import './App.css'
import { Store } from './store';

import * as types from './types';

// const API_IMG = 'https://image.tmdb.org/t/p/w300';
const App : React.FC = () => {

    const [text, setText] = React.useState('');
    // const [data, setData] = React.useState<Object>();

    const store = useLocalObservable( () => new Store())

    React.useEffect(() => {
        store.fetch();
    }, [store]);
    

    return (

        <div className="App">
            <SearchInput
                value={text}
                onChange={() => setText('')}
            />

            {
                store.loading 
                    ? <h2>Carregando ...</h2>
                    : (
                        console.log(store.movies)
                    )
            }

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

export default observer(App);