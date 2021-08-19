import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Counter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log('Counter1: render');
    return (
      <>
        <h2>Counter nr1</h2>
        <p>Button Clicked: {this.state.count} times</p>
        <CounterButton someFunc={() => this.increment()} />
      </>
    );
  }
  componentDidMount() {
    console.log('Counter1: ComponentDidMount');
  }

  componentDidUpdate() {
    console.log('Counter1: ComponentDidUpdate');
  }
}

export default Counter1;
