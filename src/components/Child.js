import React from "react";

const Child = ({ increment, decriment }) => {
  return (
    <div>
      <button onClick={increment}>Child Incriment</button>
      <button onClick={decriment}>Child Decriment</button>
    </div>
  );
};

export default Child;
