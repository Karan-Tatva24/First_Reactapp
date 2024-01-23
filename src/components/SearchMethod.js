import React, { useState } from "react";

const SearchMethod = () => {
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
  const [countryList, setCountryList] = useState(country);

  const findData = (e) => {
    const data = e.target.value;
    let updatedCountry = [...country];
    updatedCountry = updatedCountry.filter((key) => {
      return key.toLowerCase().indexOf(data.toLowerCase()) !== -1;
    });
    setCountryList(updatedCountry);
  };

  return (
    <>
      <input
        type="text"
        placeholder="search"
        onChange={findData}
        style={{ margin: "25px" }}
      />
      <div>
        <ul style={{ listStyle: "none" }}>
          {countryList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchMethod;
