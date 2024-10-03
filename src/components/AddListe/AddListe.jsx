import { useContext } from "react";
import { TiPlus } from "react-icons/ti";
import ValueState from "../../context/StsteAddlist";

function AddListe() {
  const { SetValue } = useContext(ValueState);

  const ClickHandler = () => {
    SetValue(true);
  };

  return (
    <div>
      <div
        onClick={ClickHandler}
        className="flex items-center  px-3 py-2.5 rounded-xl space-x-2 bg-white/30 hover:bg-white/20 transition-colors duration-100 cursor-pointer text-white font-medium w-[272px]"
      >
        <TiPlus />
        <button>Add another list</button>
      </div>
    </div>
  );
}

export default AddListe;
