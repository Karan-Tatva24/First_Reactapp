import React, { useState } from "react";

const BasicForm = () => {
  const [userObj, setUserObj] = useState({
    username: "",
    email: "",
  });

  const [errorObj, setErrorObj] = useState({
    username: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserObj({
      ...userObj,
      [name]: value,
    });
  };

  const handleClear = () => {
    setErrorObj({ username: "", email: "" });
  };

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      return true;
  };

  const validateForm = () => {
    handleClear();
    let isValid = true;
    const { username, email } = userObj;
    let obj = {
      username: "",
      email: "",
    };
    if (!username) {
      obj = {
        username: "Please Enter Username",
      };
      isValid = false;
    }
    if (!email) {
      obj = {
        ...obj,
        email: "Please Enter Email",
      };
      isValid = false;
    } else if (email && !validateEmail(email)) {
      obj = {
        ...obj,
        email: "Please Enter valid Email address",
      };
      isValid = false;
    }
    setErrorObj(obj);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("Form is valid");
      setUserObj({
        ...userObj,
        username: "",
        email: "",
      });
    }
  };

  return (
    <form>
      <label>
        Enter your name:
        <input
          type="text"
          autoComplete="off"
          name="username"
          value={userObj.username}
          onChange={handleChange}
        />
      </label>
      <p>{errorObj.username}</p>
      <br />
      <label>
        Enter your email:
        <input
          type="text"
          autoComplete="off"
          name="email"
          value={userObj.email}
          onChange={handleChange}
        />
      </label>
      <p>{errorObj.email}</p>
      <br />
      <button type="button" onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
};

export default BasicForm;
