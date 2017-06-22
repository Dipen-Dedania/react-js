import React, { Component } from 'react';
//import { sessionService } from 'redux-react-session';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
  	console.log("componentDidMount");
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
  	console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

//this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
// setState will refresh the page by calling render()
  tick() {
  	console.log("tick()");
    this.setState({
      date: new Date()
    });
  }

  render() {
  	console.log("render()");
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;