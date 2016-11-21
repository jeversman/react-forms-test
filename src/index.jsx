import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux';

import {App} from './App';

const reducers = {
    // ... your other reducers here ...
    form: formReducer     // <---- Mounted at 'form'
}

const reducer = combineReducers(reducers)
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);