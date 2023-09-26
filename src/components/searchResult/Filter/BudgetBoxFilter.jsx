import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CustomDropdown from "@/components/home/tabs/CustomDropdown";
import arrow from "../../../../public/images/arrowDwon.png";
import arrowtop from "../../../../public/images/arrowtop.png";

const BudgetBoxFilter = () => {
  const [showBudgetBoxDropdown, setShowBudgetBoxDropdown] = useState(false);
  const [selectedMinimum, setSelectedMinimum] = useState("Any");
  const [selectedMaximum, setSelectedMaximum] = useState("$180,000");
  const budgetBoxDropdownRef = useRef(null);
  const [topDropdownText,setTopDropdownText]=useState("Budget")
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        budgetBoxDropdownRef.current &&
        !budgetBoxDropdownRef.current.contains(event.target)
      ) {
        setShowBudgetBoxDropdown(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleDropdown = () => {
    setShowBudgetBoxDropdown(!showBudgetBoxDropdown);
  };

  const handleMinimumChange = (value) => {
    setSelectedMinimum(value);
    console.log(value);
  };

  const handleMaximumChange = (value) => {
    setSelectedMaximum(value);
  };
  useEffect(() => {
    if (selectedMinimum === "Any") {
      setTopDropdownText("Budget");
    } else {
      setTopDropdownText(`${selectedMinimum} - ${selectedMaximum}`);
    }
  }, [selectedMinimum, selectedMaximum]);
  

  const BudgetMinimum = ["Any", "$5,000", "$10,000", "$15,000"];
  const BudgetMaximum = ["$20,000", "$30,000", "$50,000", "$80,000"];

  const handleBudgetDropdownClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="z-10">
      <div ref={budgetBoxDropdownRef} className="relative">
        <button
          className={`flex flex-row justify-around items-center w-[115px] h-[42px]  border-[2px] rounded-[24px] py-[10px] px-[16px] ${
            showBudgetBoxDropdown
              ? "border-[#09A122]"
              : selectedMinimum  
              ? ""
              : "border-blue-500"
          }
          }`}
          onClick={toggleDropdown}
          
        >
          <span
            className={`text-[#141415] font-normal `}
            onClick={toggleDropdown}
          >
            {topDropdownText} 
          </span>
          <Image src={arrow} />
        </button>

        {showBudgetBoxDropdown && (
          <div
            className="absolute mt-[13px] shadow-xl bg-[#f3f4f4] z-[999]"
            style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}
            
          >
            <Image src={arrowtop} className="transform translate-y-[5px] ml-[30px] z-10" />
            <div className="w-[368px] h-[187px] bg-[#FFFFFF] p-[14px] z-10">
              <p className="text-[24px] w-[120px] text-center font-small mt-[4px]" >
                Budge       
              </p>
              <div className="p-4 flex flex-row justify-between">
                <div className="flex flex-col h-[130px]">
                  <p className="mb-[7px]">Minimum</p>
                  <span className="text-[#141415] font-normal w-[150px] border-[1px] pr-[5px] border-solid border-black" 
                  onClick={handleBudgetDropdownClick}>
                    <CustomDropdown
                      options={BudgetMinimum}
                      initialValue={selectedMinimum}
                      onSelect={handleMinimumChange}
                      HoverPurple={true}
                    />
                  </span>
                </div>
                <div className="flex flex-col h-[130px]">
                  <p className="mb-[7px]">Maximum</p>
                  <span className="text-[#141415] font-normal w-[150px] border-[1px] pr-[5px] border-solid border-black " 
                  onClick={handleBudgetDropdownClick}
                  >
                    <CustomDropdown
                      options={BudgetMaximum}
                      initialValue={"15000"}
                      onSelect={handleMaximumChange}
                      HoverPurple={true}
                    />
                  </span>
                </div>
                  
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetBoxFilter;
