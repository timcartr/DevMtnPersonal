import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'
import {HashRouter} from 'react-router-dom'
import { Switch } from 'react-router-dom';

ReactDOM.render(
<Provider store={store}>
    <HashRouter>
        <Switch>
            <App/>
        </Switch>
    </HashRouter>
</Provider>
, document.getElementById('root'));
unregister();
