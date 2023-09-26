import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CheckBox from "../CheckBox";
import arrow from "../../../../public/images/arrowDwon.png";
import arrowtop from "../../../../public/images/arrowtop.png";



function GearBoxFilter() {
  const [showGearBoxDropdown, setShowGearBoxDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Gearbox");
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const gearBoxDropdownRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        gearBoxDropdownRef.current &&
        !gearBoxDropdownRef.current.contains(event.target)
      ) {
        setShowGearBoxDropdown(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleDropdown = () => {
    setShowGearBoxDropdown(!showGearBoxDropdown);
  };

  const handleDropdownItemClick = (item) => {
    setSelectedValue(item);
    setShowGearBoxDropdown(false);
  };

  const handleCheckboxChange = (item) => {
    setSelectedValue(item);
    setShowGearBoxDropdown(false);
    setIsCheckboxSelected(true);
  };

  const GearBox = ["Atomatic", "Manual"];

  return (
    <div className="z-10">
      <div
        ref={gearBoxDropdownRef}
        className="relative"
      >
        <button
          className={`flex flex-row justify-around items-center w-[121px] h-[42px]  border-[2px] rounded-[24px] py-[10px] px-[16px] ${
            showGearBoxDropdown ? "border-[#09A122]" : isCheckboxSelected ? "border-blue-500" : ""
          }`}
          onClick={toggleDropdown}
        >
          <span
            className={`text-[#141415] font-normal `}
          >
            {selectedValue}
          </span>
          <Image src={arrow} />
        </button>

        {showGearBoxDropdown && (
          <div
            className="absolute mt-[13px] shadow-xl bg-[#f3f4f4] z-[999]"
            style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}
          >
            <Image src={arrowtop} className="transform translate-y-[5px] ml-[30px] z-10" />
            <div className="w-[292px] h-[156px] bg-[#FFFFFF] p-[14px] z-10">
              <p className="text-[24px] w-[150px] text-center font-small mt-[4px]">
                Gearbox
              </p>
              <div className="p-4">
                <div className="flex flex-col h-[60px] justify-between">
                  {GearBox.map((item, index) => (
                    <div key={index}>
                      <CheckBox
                        BoxName={"Fuel"} 
                        Value={item}
                        selected={selectedValue === item}
                        onChange={() => handleCheckboxChange(item)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GearBoxFilter;
