import React, { useState } from "react";
import "../styles/App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };
  }

  runningTime() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.runningTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <div className="date-time">
          {this.state.date + ", " + this.state.time}
        </div>
      </>
    );
  }
}

export default App;
