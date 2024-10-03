import { CgArrowsH } from "react-icons/cg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { LiaPenSolid } from "react-icons/lia";
import { IoCreateOutline } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";

function Items() {
  return (
    <div>
      <ol>
        <li className="bg-backgroundLiitems text-colorsTextHeader w-[272px] h-auto px-3 py-3 rounded-xl  ">
          <div className="flex justify-between items-center">
            <div>
              <span className="cursor-pointer">Goals</span>
            </div>
            <div className="flex items-center ">
              <CgArrowsH className="hover:bg-white/15 px-1 py-2 w-8 h-8 font-semibold rounded-md transition-colors duration-100 cursor-pointer" />
              <BiDotsHorizontalRounded className="hover:bg-white/15 px-1 py-2 w-8 h-8 font-semibold rounded-md  transition-colors duration-100 cursor-pointer" />
            </div>
          </div>
          <div className="w-full bg-backgroundINput py-1 px-2 rounded h-auto mt-2 border-2 border-transparent hover:border-white cursor-pointer mb-4 relative group">
            <span>New training program</span>
            <LiaPenSolid className="absolute right-1.5 top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          </div>

          <div className=" flex items-center    bg-inherit    ">
            <div className="  flex items-center space-x-1 hover:bg-backgroundLiitemslight w-full rounded py-1 px-2 transition-colors duration-100 cursor-pointer">
              <TiPlus />
              <span> Add to card</span>
            </div>
            <div>
              <IoCreateOutline className="hover:bg-backgroundLiitemslight px-1 py-2 w-8 h-8 rounded  transition-colors duration-100 cursor-pointer" />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Items;
