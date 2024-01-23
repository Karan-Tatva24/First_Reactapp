import React, { Component } from "react";

const country = [
  "America",
  "Belgium",
  "India",
  "Canada",
  "Japan",
  "Italy",
  "China",
  "Pakistan",
  "NewZealand",
  "SouthAfrica",
  "ShriLanka",
  "Nepal",
  "Iran",
];

export default class SearchClass extends Component {
  constructor() {
    super();
    this.state = { countryList: country };
  }

  findData = (e) => {
    const data = e.target.value;
    let updatedList = [...country];
    updatedList = updatedList.filter((key) => {
      return key.toLowerCase().indexOf(data.toLowerCase()) !== -1;
    });
    this.setState({ countryList: updatedList });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={this.findData}
          style={{ margin: "25px" }}
        />
        <div>
          <ul style={{ listStyle: "none" }}>
            {this.state.countryList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
