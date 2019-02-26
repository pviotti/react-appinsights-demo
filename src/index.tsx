import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { Router } from 'react-router-dom';
import { ReactAI } from 'react-appinsights';
import { createBrowserHistory } from "history"

import dotenv from 'dotenv';
dotenv.config();

const history = createBrowserHistory()
const IK = process.env.REACT_APP_APPINSIGHTS_KEY === undefined? "XXX" : process.env.REACT_APP_APPINSIGHTS_KEY;
ReactAI.initialize({
    instrumentationKey: IK,
    maxBatchInterval: 0,
    history: history,
    debug: true
});

ReactDOM.render(<Router history={history}>
    <App />
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
