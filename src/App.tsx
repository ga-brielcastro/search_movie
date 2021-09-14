import React from 'react';
import { useLocalObservable, observer } from 'mobx-react-lite';
import SearchInput from './components/SearchInput';
import { Store } from './store';
import './App.css'
import { toJS } from 'mobx';

import * as types from './types';

const App : React.FC = () => {

    const [text, setText] = React.useState('');

    const store = useLocalObservable( () => new Store())

    React.useEffect(() => {
        store.fetch();
    }, [store]);
    
    var res = toJS(store.result);
   
    
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
                     
                        

                        // console.log(res)

                        res.map((movie, i) => {
                            return (
                                
                                <div key={i} className="anime_list">
                                    <img src={movie.backdrop_path} alt="" /> 

                                    <h3>{movie.title}</h3>
                                    <span>{movie.title}</span>
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