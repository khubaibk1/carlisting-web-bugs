import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CheckBox from "../CheckBox";
import arrow from "../../../../public/images/arrowDwon.png";
import arrowtop from "../../../../public/images/arrowtop.png";

function FuelFilter() {
  const [showFuelDropdown, setShowFuelDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Fuel");
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const fuelDropdownRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        fuelDropdownRef.current &&
        !fuelDropdownRef.current.contains(event.target)
      ) {
        setShowFuelDropdown(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleDropdown = () => {
    setShowFuelDropdown(!showFuelDropdown);
  };

  const handleDropdownItemClick = (item) => {
    setSelectedValue(item);
    setShowFuelDropdown(false);
  };

  const handleCheckboxChange = (item) => {
    setSelectedValue(item);
    setShowFuelDropdown(false);
    setIsCheckboxSelected(true);
  };

  const FuelDropdown = ["Diesel", "Hybrid", "Electric", "Petrol"];

  return (
    <div className="z-[999]">
      <div ref={fuelDropdownRef} className="relative">
        <button
          className={`flex flex-row justify-around items-center w-[89px] h-[42px]  border-[2px] rounded-[24px] py-[10px] px-[16px] ${
            showFuelDropdown
              ? "border-[#09A122]"
              : isCheckboxSelected
              ? "border-blue-500"
              : ""
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

        {showFuelDropdown && (
          <div
            className="absolute mt-[13px] shadow-xl bg-[#f3f4f4] z-[999]"
            style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}
          >
            <Image src={arrowtop} className=" ml-[30px] transform translate-y-[5px] z-10" />
            <div className="w-[292px] h-[218px] bg-[#FFFFFF] p-[14px] z-10">
              <p className="text-[24px] w-[150px] text-center font-small mt-[4px]">
                Fuel
              </p>
              <div className="p-4">
                <div className="flex flex-col h-[130px] justify-between">
                  {FuelDropdown.map((item, index) => (
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

export default FuelFilter;
