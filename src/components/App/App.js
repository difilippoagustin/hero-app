import React, { useEffect, useReducer } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { authReducer } from "../../auth/authReducer";
import { AppRouter } from "../../routers/AppRouter/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { isLogged: false };
};

export const App = () => {
  const [userState, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userState));
  }, [userState]);
  return (
    <>
      <AuthContext.Provider value={{ userState, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
};
