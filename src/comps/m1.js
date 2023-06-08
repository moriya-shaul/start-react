import React, { Component } from "react";

export default class M1 extends Component {
  state = { counter: 0 };

  add1 = () => {
    if (this.state.counter + 1 == 6) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  };
  min1 = () => {
    if (this.state.counter - 1 < 0) {
      this.setState({ counter: 5 });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.add1}>+</button>
        <button onClick={this.min1}>-</button>
      </div>
    );
  }
}
