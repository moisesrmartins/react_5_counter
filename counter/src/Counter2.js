import React, { Component } from "react";

class Counter2 extends Component {
  state = { counter: 0 };
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
        </div>
      </div>
    );
  }
}

export default Counter2;
