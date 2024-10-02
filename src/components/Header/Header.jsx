import { CgMenuGridR } from "react-icons/cg";
import { HiChevronDown } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { MdGroup } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LiaConfluence } from "react-icons/lia";
import { PiRocketLaunch } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
const Header = () => {
  return (
    <header className=" w-full">
      {/* Create nav */}
      <nav className=" flex justify-between  items-center bg-backgroundNavbar px-4 py-1.5 border-b border-gray-800 ">
        {/* left nav */}
        <div className="flex items-center text-colorsTextHeader   ">
          <CgMenuGridR className="w-7 h-7 hover:bg-white/10 px-1   hover:rounded-sm" />
          <h1 className="font-black text-xl hover:bg-white/10 px-2 py-1 hover:rounded-sm">
            TRello
          </h1>

          {/* Menu list */}
          <ul className="flex  items-center font-semibold space-x-2 ">
            <li className="flex items-center cursor-pointer hover:bg-white/10 px-2  py-1  hover:rounded-sm">
              Workspaces{" "}
              <HiChevronDown className=" w-6 h-6 relative top-0.5 " />
            </li>
            <li className="flex items-center cursor-pointer hover:bg-white/10 px-2 py-1  hover:rounded-sm">
              Recent <HiChevronDown className=" w-6 h-6 relative top-0.5" />
            </li>
            <li className="flex items-center cursor-pointe hover:bg-white/10 px-2  py-1 hover:rounded-sm">
              Starred <HiChevronDown className=" w-6 h-6 relative top-0.5" />
            </li>
            <li className="flex items-center cursor-pointer hover:bg-white/10 px-2  py-1 hover:rounded-sm">
              Templates <HiChevronDown className=" w-6 h-6 relative top-0.5" />
            </li>
            <li className="flex items-center cursor-pointer hover:bg-blue-300 px-3  py-1 hover:rounded-md text-backgroundNavbar bg-blue-400 rounded-md ">
              <button>Create</button>
            </li>
          </ul>
        </div>
        {/* right nav */}
        <div className="flex items-center text-colorsTextHeader space-x-3 ">
          <div className=" flex items-center relative bg-backgroundINput border border-colorsTextHeader hover:bg-white/10 space-x-2 rounded py-1 ">
            <IoIosSearch className="ml-2" />
            <input
              type="email"
              placeholder="Search"
              className=" outline-none bg-transparent"
            />
          </div>
          <IoIosNotificationsOutline className="w-7 h-7 hover:bg-white/10 px-1 hover:rounded-full   " />
          <RxQuestionMarkCircled className="w-7 h-7 hover:bg-white/10 px-1   hover:rounded-full " />
          <CgProfile className="w-7 h-7 hover:bg-white/10 px-1   hover:rounded-full " />
        </div>
      </nav>
      {/* The part below nav */}
      <div className=" flex justify-between items-center = bg-black/40 backdrop-blur-sm px-6 py-4 ">
        {/*  The part below nav(left) */}
        <div className="flex items-center  space-x-4">
          <span className="text-white text-lg  font-bold hover:bg-white/20 rounded px-1.5  py-1 transition-colors duration-100 ">
            1-on-1 Meeting Agenda
          </span>
          <div className="hover:bg-white/20 px-1  py-1 rounded transition-colors duration-100 ">
            <CiStar className=" hover:text-bgstar w-6 h-6  hover:h-[27px] transition-all duration-300 ease-in-out font-extrabold cursor-pointer" />
          </div>
          <div className="hover:bg-white/20 px-1  py-1 rounded transition-colors duration-100 ">
            <MdGroup className=" text-white w-6 h-6  font-extrabold cursor-pointer" />
          </div>
          <button className="text-black bg-slate-200 hover:bg-white px-3  py-1 transition-colors duration-100 rounded font-normal ">
            Board
          </button>
          <div className="hover:bg-white/20 px-1  py-1 rounded transition-colors duration-100 ">
            <HiChevronDown className=" text-white w-6 h-6   cursor-pointer" />
          </div>
        </div>
        {/*  The part below nav right */}
        <div className="flex items-center space-x-2">
          <div className="hover:bg-white/20 px-2  py-2 rounded transition-colors duration-100 ">
            <FaRegCalendarAlt className=" hover:text-white w-4 h-4  text-white font-extrabold cursor-pointer" />
          </div>
          <div className="hover:bg-white/20 px-2  py-2 rounded transition-colors duration-100 ">
            <LiaConfluence className=" hover:text-white w-5 h-5  text-white font-extrabold cursor-pointer" />
          </div>
          <div className="hover:bg-white/20 px-2  py-2 rounded transition-colors duration-100 ">
            <PiRocketLaunch className=" hover:text-white w-5 h-5  text-white font-extrabold cursor-pointer" />
          </div>
          <div className="hover:bg-white/20 px-2  py-2 rounded transition-colors duration-100 ">
            <AiOutlineThunderbolt className=" hover:text-white w-5 h-5  text-white font-extrabold cursor-pointer" />
          </div>
          <div className=" flex  items-center space-x-2 hover:bg-white/20 px-2  py-2 rounded transition-colors border-zinc-500  ">
            <IoFilterSharp className=" hover:text-white w-3 h-3  text-white font-extrabold cursor-pointer" />
            <button className="text-white">Filters</button>
          </div>
          <hr className="border border-zinc-500  h-6" />
          <div className=" flex  items-center space-x-2 bg-slate-200 hover:bg-white px-2  py-1.5 rounded transition-colors border-zinc-500  ">
            <IoPersonAddOutline className=" hover:text-white w-4 h-4  text-black font-extrabold cursor-pointer" />
            <button className="text-black">Share</button>
          </div>
          <div className="hover:bg-white/20 px-2  py-2 rounded transition-colors duration-100 ">
            <FiMoreHorizontal className=" hover:text-white w-5 h-5  text-white font-extrabold cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
