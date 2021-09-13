import React from 'react';
import { useLocalObservable, observer } from 'mobx-react-lite';
import SearchInput from './components/SearchInput';
import Store from './store';

import './App.css'
import { toJS } from 'mobx';

const App : React.FC = () => {

    const [text, setText] = React.useState('');

    // const store = useLocalObservable( () => new Store())
    const store = Store;

    React.useEffect(() => {
        store.fetch();
    }, [store]);
    
    var res = toJS(store.result)
    
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
                     
                        res.map((anime, i) => {
                            return (
                                
                                <div key={i} className="anime_list">
                                    <img src={anime.url} alt="" /> 

                                    <h3>{anime.original_title_romanised}</h3>
                                    <span>{anime.original_title}</span>
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