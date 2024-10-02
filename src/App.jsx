import { useRoutes } from "react-router-dom";
import Allrouters from "./routers/router";

const App = () => {
  const routr = useRoutes(Allrouters);
  return <>{routr}</>;
};

export default App;
