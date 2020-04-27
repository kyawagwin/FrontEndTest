import React, { useState } from "react";
import Cookies from "js-cookie";
export const AuthContext = React.createContext();

const addItem = (key, value = "") => {
  if (key) Cookies.set(key, value, { expires: 7 });
};

const clearItem = (key) => {
  Cookies.remove(key);
};

const isValidToken = () => {
  const token = Cookies.get("token");
  // Check validity & expiration.
  if (token) return true;
  return false;
};

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(isValidToken());
  const [token, setToken] = useState(null);

  const signIn = ({ token }) => {
    console.log(token, "sign in form Props");
    setToken(token);
    addItem("token", token);
    setLoggedIn(true);
  };

  const logOut = () => {
    setToken(null);
    clearItem("token");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        signIn,
        token,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
