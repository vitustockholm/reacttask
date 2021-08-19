import React, { Component } from 'react';

class CounterButton extends Component {
  render() {
    console.log('Counter Button render');
    return <button onClick={() => this.props.someFunc()}>Action</button>;
  }
  componentDidMount() {
    console.log('CounterButton: ComponentDidMount');
  }

  componentDidUpdate() {
    console.log('CounterButton: ComponentDidUpdate');
  }
}

export default CounterButton;
