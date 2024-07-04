import React, { useState } from "react";
import Check from '../assests/Check.png';

const Part = () => {
  const [activeTab, setActiveTab] = useState("Buyer");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="mb-4  dark:border-gray-700 w-[100%]">
        <ul
          className="flex flex-wrap w-[100%] gap-[4%]"
          role="tablist"
        >
          <li className="w-[48%] text-center" role="presentation">
            <button
              className={`inline-block p-4 w-[100%]  rounded-t-lg  font-poppin font-bold text-26 leading-32  ${
                activeTab === "Buyer" ? "text-[#EB7150] border-[#EB7150] dark:text-[#EB7150] dark:border-[#EB7150] border-b-4 cursor-pointer" : " cursor-default text-white"
              }`}
              onClick={() => handleTabClick("Buyer")}
              type="button"
              role="tab"
              aria-controls="Buyer"
              aria-selected={activeTab === "Buyer"}
            >
              Buyer
            </button>
          </li>
          <li className="w-[48%] text-center" role="presentation">
            <button
              className={`inline-block p-4 w-[100%]  rounded-t-lg font-poppin font-bold text-26 leading-32 ${
                activeTab === "Supplier" ? "text-[#EB7150] border-[#EB7150] dark:text-[#EB7150] dark:border-[#EB7150] border-b-4 cursor-pointer" : " cursor-default text-white"
              }`}
              onClick={() => handleTabClick("Supplier")}
              type="button"
              role="tab"
              aria-controls="Supplier"
              aria-selected={activeTab === "Supplier"}
            >
              Supplier
            </button>
          </li>
        </ul>
      </div>

      <div id="default-styled-tab-content">
        <div
          className={`flex flex-col text-white gap-4 mt-10 ${ activeTab !== "Buyer" ? "hidden" : ""}`}
          id="styled-Buyer"
          role="tabpanel"
          aria-labelledby="Buyer-tab"
        >
         <div className="flex items-start gap-2">
          <img src={Check} alt='' className="w-[18px] h-[18px] mt-[11px]"/>
          <p className="font-poppin font-medium text-18.75 leading-39">Post your requirements.</p>
         </div>
         <div className="flex items-start gap-2">
          <img src={Check} alt='' className="w-[18px] h-[18px] mt-[11px]"/>
          <p className="font-poppin font-medium text-18.75 leading-39">Sit back for multiple suppliers to contact you.</p>
         </div>
         <div className="flex items-start gap-2">
          <img src={Check} alt='' className="w-[18px] h-[18px] mt-[11px]"/>
          <p className="font-poppin font-medium text-18.75 leading-39">Choose among the suppliers based on the ratings and reviews.</p>
         </div>
        </div>


        <div
          className={`flex flex-col text-white gap-4 mt-10  ${ activeTab !== "Supplier" ? "hidden" : ""}`}
          id="styled-Supplier"
          role="tabpanel"
          aria-labelledby="Supplier-tab"
        >
          <div className="flex items-start gap-2">
          <img src={Check} alt='' className="w-[18px] h-[18px] mt-[11px]"/>
          <p className="font-poppin font-medium text-18.75 leading-39">Complete your profile and get verified.</p>
         </div>
         <div className="flex items-start gap-2">
          <img src={Check} alt='' className="w-[18px] h-[18px] mt-[11px]"/>
          <p className="font-poppin font-medium text-18.75 leading-39">Select service tags for relevant opportunities.</p>
         </div>
         <div className="flex items-start gap-2">
          <img src={Check} alt='' className="w-[18px] h-[18px] mt-[11px]"/>
          <p className="font-poppin font-medium text-18.75 leading-39">Reach out to buyers and expand your business</p>
         </div>
        </div>
       
      </div>
    </>
  );
};

export default Part;
