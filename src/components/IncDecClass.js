import React from "react";

class IncDecClass extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  incriment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decriment = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Incriment Decriment Game</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.incriment}>Incriment</button>
        <button onClick={this.decriment}>Decriment</button>
      </div>
    );
  }
}

export default IncDecClass;
