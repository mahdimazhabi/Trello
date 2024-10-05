import { IoMdClose } from "react-icons/io";
import ValueState from "../../context/StsteAddlist";
import { useContext, useState } from "react";

function AddCard({ listIndex }) {
  const { setManagementcomponents, setTitlelisteitesm } =
    useContext(ValueState);
  const [ValueInput, setValueInput] = useState("");

  const CloseComponentsHandler = () => {
    setManagementcomponents(null);
  };

  const GetValueInputHandler = (e) => {
    setValueInput(e.target.value);
  };

  const SendDataHandler = () => {
    if (ValueInput.trim() !== "") {
      const newData = {
        id: Math.random(),
        title: ValueInput,
      };

      setTitlelisteitesm((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[listIndex].subjectItems = [
          ...(updatedItems[listIndex].subjectItems || []),
          newData,
        ];
        return updatedItems;
      });

      setValueInput("");
      setManagementcomponents(null);
    }
  };

  return (
    <div>
      <div className="bg-backgroundINput text-colorsTextHeader p-2 mb-2 rounded">
        <textarea
          placeholder="Enter a title or paste a link"
          className="w-full bg-transparent resize-none outline-none"
          value={ValueInput}
          onChange={GetValueInputHandler}
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
          className="w-9 h-9 cursor-pointer hover:bg-white/10 px-2 rounded transition-colors duration-100"
          onClick={CloseComponentsHandler}
        />
      </div>
    </div>
  );
}

export default AddCard;
