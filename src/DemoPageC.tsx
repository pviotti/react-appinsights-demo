import React, { Component } from 'react';
import { withAITracking } from 'react-appinsights';

class DemoPageC extends Component {
  render() {
    return (
      <div>
        <div className="main-text">Demo Page C</div>
        <p><small>(This page is just intended to demo the page view tracking feature of <code>react-appinsights</code>)</small></p>
      </div>
    );
  }
}

export default withAITracking(DemoPageC);
