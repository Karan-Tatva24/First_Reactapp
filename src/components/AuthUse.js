import React, { useState } from "react";

export const Authenticate = () => {
  const [auth, setAuth] = useState(false);
  const logInOut = () => {
    setAuth((prevAuth) => !prevAuth);
  };

  if (auth) {
    return (
      <>
        <h1>Welcome Guest</h1>
        <button onClick={logInOut}>Logout</button>
      </>
    );
  } else {
    return (
      <>
        <button onClick={logInOut}>LogIn</button>
      </>
    );
  }
};

const AuthUse = () => {
  return (
    <>
      <Authenticate />
    </>
  );
};

export default AuthUse;
