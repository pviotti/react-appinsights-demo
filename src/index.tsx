import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router } from 'react-router-dom';
import { reactAI } from 'react-appinsights';
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { createBrowserHistory } from "history"

import dotenv from 'dotenv';
dotenv.config();

const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
const IK = process.env.REACT_APP_APPINSIGHTS_KEY === undefined ? "xxx" : process.env.REACT_APP_APPINSIGHTS_KEY;
console.log("Initializaing AI with Instrumentation Key: ", IK);
let appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: IK,
        extensions: [reactAI],
        extensionConfig: {
            [reactAI.extensionId]: { debug: true, history }
        }
    }
});
appInsights.loadAppInsights();

ReactDOM.render(<Router history={history} >
    <App />
</Router >, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
