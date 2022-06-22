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
import Routes from './main/routes.jsx';
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers);

ReactDom.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
     document.getElementById('app'));
