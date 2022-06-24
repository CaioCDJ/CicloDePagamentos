
import React from "react";
import ReactDom from "react-dom";
import { applyMiddleware,createStore } from "redux";
import { Provider } from "react-redux";

// espera a resolucao de uma promise
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import reducers from './main/reducers';
import App from "./main/App";
import AuthOrApp from './main/authOrApp';
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers);

ReactDom.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>,
     document.getElementById('app'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
