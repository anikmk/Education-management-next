
import { get_school_record } from "@/api/school_info/school_info_Api";

import {FaAward,FaGlobe,FaHandHoldingUsd,
} from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";

export default async function InstituteInfo() {

    const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
    const instituteInfo = await get_school_record(api);
    console.log(instituteInfo)
  return (
    <div className="relative">
      {/* === Facilities Section Positioned Over Hero === */}
      <div className="md:absolute md:bottom-28 right-[2%] z-20 w-[60%] mx-auto md:w-[85%] lg:w-[75%]"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5"
        >
            <div
              className="bg-white text-[#012758] p-3 md:p-4 rounded-3xl shadow-lg 
              hover:-translate-y-2 
              transition-all 
              duration-300 
              group 
              flex flex-col justify-between
            "
            >
              {/* === Icon + Number === */}
              <div className="flex items-center justify-between">
                <div className="bg-[#012758] w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:rotate-180 transition-transform duration-500 text-accent">
                  <FaGlobe />
                </div>
                <div className="text-2xl md:text-3xl font-bold border-2 border-[#012758] rounded-md px-3 py-1 leading-none">
                  1
                </div>
              </div>

              {/* === Title + Description === */}
              <div>
                <h1 className="text-base md:text-lg font-semibold mb-2">
                  Institute EIIN
                </h1>
                <p className="">
                  {instituteInfo?.result?.eiin}
                </p>
              </div>
            </div>

            {/* card-2 */}
            <div
              className="bg-white text-[#012758] p-3 md:p-4 rounded-3xl shadow-lg 
              hover:-translate-y-2 
              transition-all 
              duration-300 
              group 
              flex flex-col justify-between
            "
            >
              {/* === Icon + Number === */}
              <div className="flex items-center justify-between mb-3">
                <div className="bg-[#012758] w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:rotate-180 transition-transform duration-500 text-accent">
                  <FaAward />
                </div>
                <div className="text-2xl md:text-3xl font-bold border-2 border-[#012758] rounded-md px-3 py-1 leading-none">
                  2
                </div>
              </div>

              {/* === Title + Description === */}
              <div>
                <h1 className="text-base md:text-lg font-semibold mb-2">
                  Institution Code
                </h1>
                <p className="">
                  {instituteInfo?.result?.organization_code}
                </p>
              </div>
            </div>

            {/* card-3 */}
            <div
              className="bg-white text-[#012758] p-3 md:p-4 rounded-3xl shadow-lg 
              hover:-translate-y-2 
              transition-all 
              duration-300 
              group 
              flex flex-col justify-between
            "
            >
              {/* === Icon + Number === */}
              <div className="flex items-center justify-between mb-3">
                <div className="bg-[#012758] w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:rotate-180 transition-transform duration-500 text-accent">
                  <FaHandHoldingUsd />
                </div>
                <div className="text-2xl md:text-3xl font-bold border-2 border-[#012758] rounded-md px-3 py-1 leading-none">
                  3
                </div>
              </div>

              {/* === Title + Description === */}
              <div>
                <h1 className="text-base md:text-lg font-semibold mb-2">
                 Center Code
                </h1>
                <p className="">
                  {instituteInfo?.result?.center_code}
                </p>
              </div>
            </div>

            {/* card-4 */}
            <div
              className="bg-white text-[#012758] p-3 md:p-4 rounded-3xl shadow-lg 
              hover:-translate-y-2 
              transition-all 
              duration-300 
              group 
              flex flex-col justify-between
            "
            >
              {/* === Icon + Number === */}
              <div className="flex items-center justify-between mb-3">
                <div className="bg-[#012758] w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:rotate-180 transition-transform duration-500 text-accent">
                  <IoIosCreate />
                </div>
                <div className="text-2xl md:text-3xl font-bold border-2 border-[#012758] rounded-md px-3 py-1 leading-none">
                  4
                </div>
              </div>

              {/* === Title + Description === */}
              <div>
                <h1 className="text-base md:text-lg font-semibold mb-2">
                  Estd Year
                </h1>
                <p className="">
                  {instituteInfo?.result?.estd}
                </p>
              </div>
            </div>
        </div>
      </div>

      {/* === Bottom Space to Prevent Overlap === */}
      <div className="h-48 md:h-52"></div>
    </div>
  );
}
