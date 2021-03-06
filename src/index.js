import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'tachyons';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
