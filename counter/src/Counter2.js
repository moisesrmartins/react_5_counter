import React, { Component } from "react";

class Counter2 extends Component {
  state = { counter: 0 };
  add = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  remove = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  clear = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="Counter2">
        <div>
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Counter 2
          </h1>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {this.state.counter}
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button onClick={this.add}>+</button>
            <button onClick={this.clear}>Clear</button>
            <button onClick={this.remove}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter2;
