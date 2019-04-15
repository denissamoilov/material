import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './theme/Theme';

import promotionReducer from './store/reducers/promotionReducer';

// Load Roboto typeface
require('typeface-montserrat');

// REDUX

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    promotion: promotionReducer,
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))


const app = (
    <Provider store={store}>
        <MuiThemeProvider theme={Theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
