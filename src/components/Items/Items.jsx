import { CgArrowsH } from "react-icons/cg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { LiaPenSolid } from "react-icons/lia";
import { IoCreateOutline } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import ValueState from "../../context/StsteAddlist";
import AddCard from "../AddCard/AddCard";
import { useContext } from "react";

function Items() {
  const { Titlelisteitesm, Managementcomponents, setManagementcomponents } =
    useContext(ValueState);

  const RenderComponentsHandler = (index) => {
    setManagementcomponents(index);
  };

  return (
    <div className=" ">
      <ol className="lg:flex  gap-4 space-y-10 lg:space-y-0">
        {Titlelisteitesm.map((list, index) => (
          <li
            key={index}
            id={`list-${list.id}`} // اختصاص دادن ID یکتا به هر li
            className="bg-backgroundLiitems text-colorsTextHeader w-[272px]  px-3 py-3 max-h-min  rounded-xl relative overflow-hidden"
          >
            <div className="flex justify-between items-center overflow-auto">
              <div>
                <span className="cursor-pointer">{list.title}</span>
              </div>
              <div className="flex items-center">
                <CgArrowsH className="hover:bg-white/15 px-1 py-2 w-8 h-8 font-semibold rounded-md transition-colors duration-100 cursor-pointer" />
                <BiDotsHorizontalRounded className="hover:bg-white/15 px-1 py-2 w-8 h-8 font-semibold rounded-md transition-colors duration-100 cursor-pointer" />
              </div>
            </div>
            <div className="">
              {list.subjectItems &&
                list.subjectItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-full bg-backgroundINput py-1 px-2 rounded mt-2 border-2 border-transparent hover:border-white cursor-pointer mb-4 relative group"
                  >
                    <span>{item.title}</span>
                    <LiaPenSolid className="absolute right-1.5 top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                  </div>
                ))}
            </div>
            {Managementcomponents === index ? (
              <AddCard listIndex={index} />
            ) : (
              <div className="flex items-center bg-inherit">
                <div className="flex items-center space-x-1 hover:bg-backgroundLiitemslight w-full rounded py-1 px-2 transition-colors duration-100 cursor-pointer">
                  <TiPlus />
                  <span onClick={() => RenderComponentsHandler(index)}>
                    Add to card
                  </span>
                </div>
                <div>
                  <IoCreateOutline className="hover:bg-backgroundLiitemslight px-1 py-2 w-8 h-8 rounded transition-colors duration-100 cursor-pointer" />
                </div>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Items;
