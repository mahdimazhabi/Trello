// import { LiaPenSolid } from "react-icons/lia";
// import ValueState from "../../context/StsteAddlist";
// import { useContext } from "react";

// function ContentAddlist() {
//   const { SubjectItems } = useContext(ValueState); // گرفتن SubjectItems از context

//   return (
//     <div>
//       {SubjectItems.map(
//         (
//           item,
//           index // بررسی و اطمینان از وجود SubjectItems
//         ) => (
//           <div key={index}>
//             <div className="w-full bg-backgroundINput py-1 px-2 rounded h-auto mt-2 border-2 border-transparent hover:border-white cursor-pointer mb-4 relative group">
//               <span>{item}</span> {/* نمایش مقدار item */}
//               <LiaPenSolid className="absolute right-1.5 top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
//             </div>
//           </div>
//         )
//       )}
//     </div>
//   );
// }

// export default ContentAddlist;
