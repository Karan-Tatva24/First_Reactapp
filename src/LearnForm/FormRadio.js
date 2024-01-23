import React, { useState } from "react";

const FormRadio = () => {
  const [techChoise, setTechChoise] = useState({
    frontend: "",
    backend: "",
    database: "",
  });

  const [errorObj, setErrorObj] = useState({
    frontend: "",
    backend: "",
    database: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTechChoise({
      ...techChoise,
      [name]: value,
    });
  };

  const handleClear = () => {
    setErrorObj({
      frontend: "",
      backend: "",
      database: "",
    });
  };

  const validation = () => {
    handleClear();
    let isValid = true;
    const { frontend, backend, database } = techChoise;
    let obj = {
      frontend: "",
      backend: "",
      database: "",
    };
    if (!frontend) {
      obj = {
        frontend: "Please enter Frontend",
      };
      isValid = false;
    }
    if (!backend) {
      obj = {
        ...obj,
        backend: "Please enter Backend",
      };
      isValid = false;
    }
    if (!database) {
      obj = {
        ...obj,
        database: "Please enter Database",
      };
      isValid = false;
    }
    setErrorObj(obj);
    return isValid;
  };

  const handleSubmit = () => {
    if (validation()) {
      alert("Submit");
    }
  };

  return (
    <>
      <form>
        <hr />
        <h5>
          Select your favorait fronend technology(selct any one)
          <span style={{ color: "red" }}>*</span>
        </h5>
        <input
          type="radio"
          name="frontend"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="ract">Vue</label>
        <br />
        <input
          type="radio"
          name="frontend"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="ract">React js</label>
        <br />
        <input
          type="radio"
          name="frontend"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="ract">Angular js</label>
        <br />
        <input
          type="radio"
          name="frontend"
          value="javascript"
          onChange={handleChange}
        />
        <label htmlFor="ract">JavaScript</label>
        <br />
        <input
          type="radio"
          name="frontend"
          value="flutter"
          onChange={handleChange}
        />
        <label htmlFor="ract">Flutter</label>
        <p style={{ color: "red" }}>{errorObj.frontend}</p>
        <hr />
        <h5>
          Select your favorait backend technology(selct any one)
          <span style={{ color: "red" }}>*</span>
        </h5>
        <input
          type="radio"
          name="backend"
          value="python"
          onChange={handleChange}
        />
        <label htmlFor="ract">Python</label>
        <br />
        <input
          type="radio"
          name="backend"
          value="node"
          onChange={handleChange}
        />
        <label htmlFor="ract">Node js</label>
        <br />
        <input
          type="radio"
          name="backend"
          value="java"
          onChange={handleChange}
        />
        <label htmlFor="ract">Java</label>
        <br />
        <input
          type="radio"
          name="backend"
          value="php"
          onChange={handleChange}
        />
        <label htmlFor="ract">PHP</label>
        <br />
        <input
          type="radio"
          name="backend"
          value="ruby"
          onChange={handleChange}
        />
        <label htmlFor="ract">Ruby</label>
        <p style={{ color: "red" }}>{errorObj.backend}</p>
        <hr />
        <h5>
          Select your favorait Databse (selct any one)
          <span style={{ color: "red" }}>*</span>
        </h5>
        <input
          type="radio"
          name="database"
          value="mysql"
          onChange={handleChange}
        />
        <label htmlFor="ract">MySQL</label>
        <br />
        <input
          type="radio"
          name="database"
          value="mongo"
          onChange={handleChange}
        />
        <label htmlFor="ract">Mongo db</label>
        <br />
        <input
          type="radio"
          name="database"
          value="nosql"
          onChange={handleChange}
        />
        <label htmlFor="ract">NoSQL</label>
        <br />
        <input
          type="radio"
          name="database"
          value="postgresql"
          onChange={handleChange}
        />
        <label htmlFor="ract">PostgreSQL</label>
        <br />
        <input
          type="radio"
          name="database"
          value="cloud"
          onChange={handleChange}
        />
        <label htmlFor="ract">Cloud database</label>
        <p style={{ color: "red" }}>{errorObj.database}</p>
        <hr />
        <button type="button" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </>
  );
};

export default FormRadio;
