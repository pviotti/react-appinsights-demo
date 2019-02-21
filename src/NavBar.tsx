import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  public render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={'/demo-a'} >Page A</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to={'/demo-b'} >Page B</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to={'/demo-c'} >Page C</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
