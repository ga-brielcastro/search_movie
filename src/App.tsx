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
    
    var res = toJS(store.result)

    // var res = Object.keys(data).map( i => JSON.parse(data))
    
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
                     
                       res.map((a, i) => {
                   
                            console.log(a)

                            return (
                                <div className="movies_list">

                                    <img src={a.url} />

                                    <li key={i}>
                                        {a.original_title}
                                    </li>

                                    <span>
                                        {a.original_title_romanised}
                                    </span>
                                </div>

                            )
    
                       })

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
                Dados pegos da API Studio Ghibli.
            </footer>

        </div>

    );

}

export default observer(App);