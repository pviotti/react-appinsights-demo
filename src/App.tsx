import React, { Component } from 'react';
import NavBar from './NavBar'
import logoAI from './img/logo-ai.svg';
import logoReact from './img/logo-react.svg';
import heart from './img/heart.svg';
import './App.css';

import { Route } from 'react-router-dom';
import PageA from './DemoPageA';
import PageB from './DemoPageB';
import PageC from './DemoPageC';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <div className="page-content">
            <Route path='/' component={PageA} exact={true} />
            <Route path='/demo-a' component={PageA} />
            <Route path='/demo-b' component={PageB} />
            <Route path='/demo-c' component={PageC} />
          </div>

          <div className="bottom-link main-text">
            <div className="logos">
              <img src={logoReact} className="logo" alt="React" />
              +
              <img src={logoAI} className="logo" alt="Application Insights" />
              =
              <img src={heart} id="heart" className="logo" alt="love" />
            </div>
            <a className="react-ai-link"
              href="https://github.com/Azure/react-appinsights#react-appinsights"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn about Application Insights in React
            </a>
          </div>
        </div>
      </div>
    );
  }
}
