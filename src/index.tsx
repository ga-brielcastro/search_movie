import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Store from './store';

ReactDOM.render(
  <React.StrictMode>
    <App children={Store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

