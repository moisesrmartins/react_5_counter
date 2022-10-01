import React, { useState } from "react";

function Counter1() {
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter(counter + 1);
  };
  const remove = () => {
    setCounter(counter - 1);
  };
  const clear = () => {
    setCounter(0);
  };

  return (
    <div className="Counter1">
      <div>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Counter 1
        </h1>
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {counter}
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={add}>+</button>
          <button onClick={clear}>Clear</button>
          <button onClick={remove}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Counter1;
