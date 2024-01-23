import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrimentCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <h3>{count}</h3>
      <Child increment={incrementCount} decriment={decrimentCount} />
    </div>
  );
};

export default Parent;
