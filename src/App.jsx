import { useRoutes } from "react-router-dom";
import Allrouters from "./routers/router";
import IsLogin from "./context/IsLogin";
import { useState } from "react";
const App = () => {
  const routr = useRoutes(Allrouters);

  const [DataUser, setDataUser] = useState([]);

  return (
    <IsLogin.Provider value={{ DataUser, setDataUser }}>
      {/* Rendering the routes */}
      {routr}
    </IsLogin.Provider>
  );
};

export default App;
