import React, { useState,useEffect,useRef } from "react";
import Image from "next/image";
import arrow from "../../../../public/images/arrowDwon.png";
import arrowtop from "../../../../public/images/arrowtop.png";
import CheckBox from "../CheckBox";

function NewCar() {
  const [showAllUsedDropdown, setShowAllUsedDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState('All Used'); 
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    
    const handleDocumentClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        
        setShowAllUsedDropdown(false);
      }
    };

    
    document.addEventListener("click", handleDocumentClick);
    
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);


  const toggleDropdown = () => {
    setShowAllUsedDropdown(!showAllUsedDropdown);
  };

  const handleDropdownItemClick = (item) => {
    setSelectedValue(item); 
    setShowAllUsedDropdown(false);
    setIsCheckboxSelected(true);  
  };
  const AllUsed = ["New Clear", "Used Clear", "All Used", "All New"];
  return (
    <div ref={dropdownRef} className="z-[999]">
      <button
        className={`flex flex-row justify-around items-center w-[137px] h-[42px]  border-[2px] rounded-[24px]  py-[10px] px-[16px] ${ showAllUsedDropdown ? "border-[#09A122]" : isCheckboxSelected ? "border-blue-500" : ""}`}
        onClick={toggleDropdown}
      >
        <span className="text-[#141415] font-normal">{selectedValue}</span> 
        <Image src={arrow} />
      </button>

      {showAllUsedDropdown && (
        <div
          className="absolute mt-[13px] shadow-xl bg-[#f3f4f4] z-10"
          style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}
          
        >
          <Image src={arrowtop} className="transform translate-y-[5px] ml-[30px] z-10" />
          <div className="w-[292px] h-[218px] bg-[#FFFFFF] p-[14px]  z-10">
            <p className="text-[24px] w-[150px] text-center font-small mt-[4px]">
              New/Used
            </p>
            <div className="p-4">
              <div className="flex flex-col h-[130px] justify-between">
                {AllUsed.map((item, index) => (
                  <div key={index}>
                    <CheckBox
                      BoxName={"Fuel"}
                      Value={item}
                      selected={selectedValue === item} 
                      onChange={() => handleDropdownItemClick(item)} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewCar;
