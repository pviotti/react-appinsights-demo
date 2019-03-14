import * as React from 'react';
import { reactAI, withAITracking } from 'react-appinsights';

interface State {
  message: string;
}

class DemoPageA extends React.Component<any, State> {

  constructor(props: any) {
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      message: "",
    }

    this.trackException = this.trackException.bind(this);
    this.trackTrace = this.trackTrace.bind(this);
    this.trackEvent = this.trackEvent.bind(this);
    this.throwError = this.throwError.bind(this);
    this.ajaxRequest = this.ajaxRequest.bind(this);
  }

  trackException() {
    reactAI.appInsights.trackException({ error: new Error('some error'), severityLevel: 3 });
    this.setState({ message: "Exception explicitly tracked" });
  }

  trackTrace() {
    reactAI.appInsights.trackTrace({ message: 'some trace', severityLevel: 1 });
    this.setState({ message: "Trace explicitly tracked" });
  }

  trackEvent() {
    reactAI.appInsights.trackEvent({ name: 'some event' });
    this.setState({ message: "Event explicitly tracked" });
  }

  throwError() {
    this.setState({ message: "Error thrown and automatically collected" });
    // This will crash the app; the error will show up in the Azure Portal
    throw new Error("Error Foo Bar");
  }

  ajaxRequest() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://httpbin.org/status/200');
    xhr.send();
    this.setState({ message: "Ajax request performed and automatically collected" });
  }

  render() {
    return (
      <div>
        <div className="main-text">Demo Page A</div>
        <button type="button" className="btn btn-outline-warning btn-lg" onClick={this.trackException} >Track Exception</button>
        <button type="button" className="btn btn-outline-primary btn-lg" onClick={this.trackEvent} >Track Event</button>
        <button type="button" className="btn btn-outline-info btn-lg" onClick={this.trackTrace} >Track Trace</button><br />
        <button type="button" className="btn btn-outline-light btn-lg" onClick={this.ajaxRequest} >Autocollect a Request</button>
        <button type="button" className="btn btn-outline-danger btn-lg" onClick={this.throwError} >Autocollect an Error</button>
        <br />...or navigate to another page to trigger component-based page tracking.
        {this.state.message !== "" &&
          <div className="alert alert-primary" role="alert">
            {this.state.message}
          </div>
        }
      </div>
    );
  }
}

export default withAITracking(DemoPageA);
