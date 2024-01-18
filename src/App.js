import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContextProvider } from "./Hooks/AppContext";
import "./App.css";
import "./css/css/style.scss";
import Routers from "./Routes/routes";
function App(props) {
  return (
    <>
      <AppContextProvider>
        <Routers />
      </AppContextProvider>
    </>
  );
}

export default App;
