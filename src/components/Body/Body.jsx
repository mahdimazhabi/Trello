import AddListe from "../AddListe/AddListe";
import Items from "../Items/Items";
import ValueState from "../../context/StsteAddlist";
import { useState } from "react";
import CreateList from "../CreateList/CreateList";

function Body() {
  const [Value, SetValue] = useState("");

  const [Titlelisteitesm, setTitlelisteitesm] = useState([]);

  console.log(Titlelisteitesm);

  return (
    <section className="flex mt-2 mx-3 gap-5">
      <ValueState.Provider
        value={{ Value, SetValue, Titlelisteitesm, setTitlelisteitesm }}
      >
        <Items />
        {!Value ? <AddListe /> : <CreateList />}
      </ValueState.Provider>
    </section>
  );
}

export default Body;
