import React, { useState } from "react";

function Counter1() {
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="Counter1">
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}

export default Counter1;
