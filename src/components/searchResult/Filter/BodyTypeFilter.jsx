import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CheckBox from "../CheckBox"; 
import arrow from "../../../../public/images/arrowDwon.png"
import arrowtop from "../../../../public/images/arrowtop.png"

function BodyTypeFilter() {
  const [showBodyTypeDropdown, setShowBodyTypeDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Body Type");
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const bodyTypeDropdownRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        bodyTypeDropdownRef.current &&
        !bodyTypeDropdownRef.current.contains(event.target)
      ) {
        setShowBodyTypeDropdown(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleDropdown = () => {
    setShowBodyTypeDropdown(!showBodyTypeDropdown);
  };

  const handleDropdownItemClick = (item) => {
    setSelectedValue(item);
    setShowBodyTypeDropdown(false);
  };

  const handleCheckboxChange = (item) => {
    setSelectedValue(item);
    setShowBodyTypeDropdown(false);
    setIsCheckboxSelected(true);
  };

  const BodyType = [
    "Convertible",
    "Couple",
    "Estate",
    "Hatchback",
    "Roadster",
    "Saloon",
  ];

  return (
    <div className="z-[999]">
      <div
        ref={bodyTypeDropdownRef}
        className="relative"
      >
        <button
          className={`flex flex-row justify-around items-center w-auto h-[42px] border-[2px] rounded-[24px] py-[10px] px-[16px] ${ showBodyTypeDropdown ? "border-[#09A122]" : isCheckboxSelected ? "border-blue-500" : ""} `}
          
          onClick={toggleDropdown}
        >
          <span
            className={`text-[#141415] font-normal`}
          >
            {selectedValue}
          </span>
          <Image src={arrow} />
        </button>

        {showBodyTypeDropdown && (
          <div
            className="absolute mt-[13px] shadow-xl bg-[#f3f4f4] z-[999]"
            style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}
          >
            <Image src={arrowtop} className="transform translate-y-[5px] ml-[30px] z-10" />
            <div className="w-[292px] h-[294px] bg-[#FFFFFF] p-[14px] z-10">
              <p className="text-[24px] w-[150px] text-center font-small mt-[4px]">
                Body Type
              </p>
              <div className="p-4">
                <div className="flex flex-col h-[200px] justify-between">
                  {BodyType.map((item, index) => (
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

export default BodyTypeFilter;
