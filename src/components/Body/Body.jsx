import AddListe from "../AddListe/AddListe";
import Items from "../Items/Items";
import ValueState from "../../context/StsteAddlist";
import { useState } from "react";
import CreateList from "../CreateList/CreateList";

function Body() {
  // State برای کنترل نمایش یا عدم نمایش CreateList
  const [Value, SetValue] = useState(false);

  // State برای ذخیره لیست عناوین و آیتم‌ها
  const [Titlelisteitesm, setTitlelisteitesm] = useState([
    {
      title: "Training List",
      subjectItems: [{ id: 1, title: "New training program" }],
    },
  ]);

  // State برای مدیریت کامپوننت‌های مختلف (اضافه کردن یا بستن کارت‌ها)
  const [Managementcomponents, setManagementcomponents] = useState(null);

  return (
    <section className="flex mt-2 mx-3 gap-5">
      <ValueState.Provider
        value={{
          Value,
          SetValue,
          Titlelisteitesm,
          setTitlelisteitesm,
          Managementcomponents,
          setManagementcomponents,
        }}
      >
        {/* نمایش لیست آیتم‌ها */}
        <Items />
        {/* نمایش AddListe یا CreateList بر اساس مقدار state */}
        {!Value ? <AddListe /> : <CreateList />}
      </ValueState.Provider>
    </section>
  );
}

export default Body;
