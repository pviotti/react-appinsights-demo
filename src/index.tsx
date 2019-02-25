import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router } from 'react-router-dom';
import { ReactAI } from 'react-appinsights';
import { createBrowserHistory } from "history"

const history = createBrowserHistory()
// const IK = process.env.APPINSIGHTS_KEY === "" ? "XXX" : process.env.APPINSIGHTS_KEY;
ReactAI.initialize({ instrumentationKey: "IK", history: history, debug: true }); // XXX

export var IndexPage =
    <Router history={history}>
        <App />
    </Router>;
ReactDOM.render(IndexPage, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
