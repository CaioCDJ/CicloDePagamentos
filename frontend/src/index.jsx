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

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
     document.getElementById('app'));
