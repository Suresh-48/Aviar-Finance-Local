import React, { useState, useMemo, createContext, useContext } from "react";
import Services from "../Services";

export const AppContextProvider = ({ children }) => {
  const login = (payload) => {
    //payload = {email,password}
    Services.login(payload)
      .then((res) => {
        //Navigate
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const logOut = () => {};
  const link = false;
  const [sidebar, setSidebar] = useState(false);

  const memoedValue = useMemo(
    () => ({
      login,
      logOut,
      link,
      sidebar,
      setSidebar,
    }),
    []
  );
  return <AppContext.Provider value={memoedValue}>{children}</AppContext.Provider>;
};

export function useAppContext(props) {
  const ctx = useContext(AppContext);
  return {
    ...ctx,
  };
}

export const AppContext = createContext();
export default AppContext;
