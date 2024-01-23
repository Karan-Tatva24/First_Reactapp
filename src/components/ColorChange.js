import React, { useState } from "react";

const ColorChange = () => {
  const customStyle = {
    backgroundColor: "black",
    height: "100px",
    width: "100px",
    border: "1px solid black",
    color: "white",
    margin: "20px",
  };
  const [cssStyle, setCssStyle] = useState(customStyle);

  const changeColor = (e) => {
    setCssStyle({
      ...customStyle,
      backgroundColor: e.target.value.length === 0 ? "black" : e.target.value,
    });
  };

  return (
    <div className="container">
      <div style={cssStyle}>This is box</div>
      <form action="#">
        <input type="text" name="color" id="1" onChange={changeColor} />
      </form>
    </div>
  );
};

export default ColorChange;

{
  /* <input
  type="radio"
  id="red"
  name="color"
  value="Red"
  onChange={changeColor}
/>
<label for="red">Red</label>
<br />
<input
  type="radio"
  id="green"
  name="color"
  value="Green"
  onChange={changeColor}
/>
<label for="green">Green</label>
<br />
<input
  type="radio"
  id="blue"
  name="color"
  value="Blue"
  onChange={changeColor}
/>
<label for="blue">Blue</label> */
}
