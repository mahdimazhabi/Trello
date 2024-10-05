import { IoMdClose } from "react-icons/io";
import ValueState from "../../context/StsteAddlist";
import { useContext, useState } from "react";

function CreateList() {
  const { SetValue, setTitlelisteitesm } = useContext(ValueState);
  const [ValueInput, setValueInput] = useState("");

  const CloseCreateListHandler = () => {
    SetValue(false);
  };

  const GetValueInputHandler = (e) => {
    setValueInput(e.target.value);
  };

  const SendDataHandler = () => {
    if (ValueInput.trim() !== "") {
      const newList = {
        title: ValueInput,
        subjectItems: [],
      };
      setTitlelisteitesm((prev) => [...prev, newList]);
      setValueInput("");
      SetValue(false);
    }
  };

  return (
    <div className="w-[272px]">
      <div className="bg-backgroundLiitems rounded-xl p-2 text-colorsTextHeader">
        <div>
          <input
            type="text"
            placeholder="Enter list name..."
            className="border-2 border-colorsTextHeader w-full bg-backgroundINput rounded p-1 outline-none"
            value={ValueInput}
            onInput={GetValueInputHandler}
          />
        </div>
        <div className="flex items-center mt-2 space-x-3">
          <button
            className="px-3 py-1 bg-blue-400 hover:bg-blue-300 transition-colors duration-150 text-black rounded"
            onClick={SendDataHandler}
          >
            Add list
          </button>
          <IoMdClose
            className="w-6 h-6 cursor-pointer"
            onClick={CloseCreateListHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateList;
