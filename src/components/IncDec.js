import React, { useState } from "react";

const IncDec = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={inc}>Incriment</button>
      <button onClick={dec}>Decriment</button>
    </>
  );
};

export default IncDec;
