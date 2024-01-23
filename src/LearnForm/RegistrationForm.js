import React, { useState } from "react";
import "../App.css";

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    title: "",
    firstname: "",
    lastname: "",
    gender: "",
    phone: "",
    email: "",
    hobbys: [""],
    about: "",
    photo: null,
    resume: null,
    password: "",
    confirmPass: "",
    isAccept: false,
  });

  const [errorObj, setErrorObj] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    hobbys: "",
    about: "",
    photo: "",
    resume: "",
    password: "",
    confirmPass: "",
    isAccept: "",
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setUserData({
        ...userData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleClear = () => {
    setErrorObj({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      hobbys: "",
      about: "",
      photo: "",
      resume: "",
      password: "",
      confirmPass: "",
      isAccept: "",
    });
  };

  const validateEmail = (email) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)) return true;
  };

  const validationMobile = (mobile) => {
    if (/^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile)) return true;
  };

  const isValidPhoto = (photo) => {
    const validExtensions = ["png", "jpeg", "jpg"];
    const fileExtension = photo.type.split("/").pop();
    return !validExtensions.includes(fileExtension);
    // console.log(validExtensions.includes(fileExtension));
  };

  const isValidFile = (resume) => {
    const validExtensions = ["pdf"];
    const fileExtension = resume.type.split("/").pop();
    return !validExtensions.includes(fileExtension);
  };

  const validation = () => {
    handleClear();
    const {
      firstname,
      lastname,
      phone,
      email,
      hobbys,
      about,
      photo,
      resume,
      password,
      confirmPass,
      isAccept,
    } = userData;
    let obj = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      hobbys: "",
      about: "",
      photo: "",
      resume: "",
      password: "",
      confirmPass: "",
      isAccept: "",
    };
    let isValid = true;

    if (!firstname) {
      obj = { ...obj, firstname: "Please enter first name" };
      isValid = false;
    }

    if (!lastname) {
      obj = { ...obj, lastname: "Please enter last name" };
      isValid = false;
    }

    if (!phone) {
      obj = { ...obj, phone: "Please enter phone number" };
      isValid = false;
    } else if (phone && !validationMobile(phone)) {
      obj = {
        ...obj,
        phone: "Please enter valid phone number.",
      };
      isValid = false;
    }

    if (!email) {
      obj = { ...obj, email: "Please enter email" };
      isValid = false;
    } else if (email && !validateEmail(email)) {
      obj = {
        ...obj,
        email: "Please Enter valid Email address",
      };
      isValid = false;
    }

    if (!hobbys) {
      obj = { ...obj, hobbys: "Please select atleast one hobby" };
      console.log(hobbys);
      isValid = false;
    }

    if (!about) {
      obj = { ...obj, about: "Please enter something about yourself" };
      isValid = false;
    }

    if (!photo) {
      obj = { ...obj, photo: "Please select your photo" };
      isValid = false;
    } else if (photo && isValidPhoto(photo)) {
      obj = { ...obj, photo: "Select only .png, .jpg, .jpeg formate" };
      isValid = false;
    }

    if (!resume) {
      obj = { ...obj, resume: "Select one file" };
      isValid = false;
    } else if (photo && isValidFile(resume)) {
      obj = { ...obj, resume: "Select only .pdf formate" };
      isValid = false;
    }

    if (!password) {
      obj = { ...obj, password: "Please enter password" };
      isValid = false;
    }

    if (!confirmPass) {
      obj = { ...obj, confirmPass: "Please confirm your password" };
      isValid = false;
    }

    if (!isAccept) {
      obj = { ...obj, isAccept: "Please accept conditions before submit" };
      isValid = false;
    }

    setErrorObj(obj);
    return isValid;
  };

  const handleSubmit = () => {
    if (validation()) {
      alert("Good");
    }
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <img src="https://picsum.photos/400/100" alt="logo" />
          <form>
            <h2>Create Your Profile</h2>
            <div className="inputbox">
              <label htmlFor="title">Title *</label>
              <select
                name="title"
                id="title"
                className="inputFild"
                onChange={handleChange}
              >
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss.">Miss.</option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
              </select>
            </div>
            <div className="inputbox">
              <label htmlFor="firstname">First name *</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter your first name"
                className="inputFild"
                onChange={handleChange}
              />
              <p>{errorObj.firstname}</p>
            </div>
            <div className="inputbox">
              <label htmlFor="lastname">Last name *</label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your last name"
                className="inputFild"
                onChange={handleChange}
              />
              <p>{errorObj.lastname}</p>
            </div>
            <div className="inputbox">
              <label htmlFor="gender">Gender *</label>
              <select
                name="gender"
                id="gender"
                className="inputFild"
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="inputbox">
              <label htmlFor="phone">Mobile number *</label>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Enter your phone number"
                className="inputFild"
                onChange={handleChange}
              />
              <p>{errorObj.mobile}</p>
            </div>
            <div className="inputbox">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="inputFild"
                onChange={handleChange}
              />
              <p>{errorObj.email}</p>
            </div>
            <div className="inputbox">
              <div>Select your hobbys *</div>
              <label htmlFor="play">Playing Game</label>
              <input type="checkbox" name="hobbys" id="play" />
              <label htmlFor="read">Reading</label>
              <input type="checkbox" name="hobbys" id="read" />
              <label htmlFor="watching">Watch Movies</label>
              <input type="checkbox" name="hobbys" id="watching" />
              <p>{errorObj.hobbys}</p>
            </div>
            <div className="inputbox">
              <label htmlFor="about">About your self *</label>
              <div>
                <textarea
                  name="about"
                  id="about"
                  cols="60"
                  rows="5"
                  placeholder="Discribe your self......"
                  onChange={handleChange}
                />
                <p>{errorObj.about}</p>
              </div>
            </div>
            <div className="inputbox">
              <label htmlFor="photo">Upload photo *</label>
              <br />
              <input
                type="file"
                name="photo"
                id="photo"
                onChange={handleChange}
              />
              <p>{errorObj.photo}</p>
            </div>
            <div className="inputbox">
              <label htmlFor="resume">Upload resume</label>
              <br />
              <input
                type="file"
                name="resume"
                id="resume"
                onChange={handleChange}
              />
              <p>{errorObj.resume}</p>
            </div>
            <div className="inputbox">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="inputFild"
                onChange={handleChange}
              />
              <p>{errorObj.password}</p>
            </div>
            <div className="inputbox">
              <label htmlFor="confirm">Confirm password *</label>
              <input
                type="password"
                name="confirm"
                id="confirm"
                placeholder="Confirm your password"
                className="inputFild"
                onChange={handleChange}
              />
              <p>{errorObj.confirmPass}</p>
            </div>
            <div className="inputbox">
              <input type="checkbox" name="accept" onChange={handleChange} />I
              accept the terms and conditions
              <p>{errorObj.isAccept}</p>
            </div>
            <div className="inputbox">
              Have an account? Sign in
              <button type="button" onClick={handleSubmit}>
                CREATE ACCOUNT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
