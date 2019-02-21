import React, { Component } from 'react';
import { withAITracking } from 'react-appinsights';

class DemoPageB extends Component {
  render() {
    return (
      <div>
        <div className="main-text">Demo Page B</div>
        <p><small>(This page is just intended to demo the page view tracking feature of <code>react-appinsights</code>)</small></p>
      </div>
    );
  }
}

export default withAITracking(DemoPageB);
