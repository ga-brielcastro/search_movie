import React from 'react';
import { useLocalObservable, observer } from 'mobx-react-lite';
import * as types from './types';
import SearchInput from './components/SearchInput';
import { Store } from './store';

import './App.css'
import { toJS } from 'mobx';

const API_IMG = 'https://image.tmdb.org/t/p/w300';

const App : React.FC = () => {

    const [text, setText] = React.useState('');

    const store = useLocalObservable( () => new Store())

    React.useEffect(() => {
        store.fetch();
    }, [store]);
    
    // var data: types.Result[] = store.result // Vem em proxy
    var data: types.Result[] = toJS(store.result)

    return (

        <div className="App">
            <SearchInput
                value={text}
                onChange={ (txt: string) => setText(txt)}
            />

            {
                store.loading 
                    ? <h2>Carregando ...</h2>
                    : (
                        console.log(data) //Data não possui nenhuma propriedade
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