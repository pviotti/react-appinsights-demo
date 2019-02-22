import React, { Component } from 'react';
import { withAITracking } from 'react-appinsights';

class DemoPageA extends Component {
  render() {
    return (
      <div>
        <div className="main-text">Demo Page A</div>
        <button type="button" className="btn btn-outline-warning btn-lg">Track Exception</button>
        <button type="button" className="btn btn-outline-primary btn-lg">Track Event</button>
        <button type="button" className="btn btn-outline-info btn-lg">Track Trace</button><br />
        <button type="button" className="btn btn-outline-light btn-lg">Autocollect an Error</button>
        <button type="button" className="btn btn-outline-light btn-lg">Autocollect a Request</button>
        <br />...or navigate to another page to trigger component-based page tracking.
      </div>
    );
  }
}

export default withAITracking(DemoPageA);
