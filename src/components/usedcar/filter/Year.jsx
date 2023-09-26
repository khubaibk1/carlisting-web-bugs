"use client"
import React, { useState, useEffect, useRef ,scroll } from 'react';
import Image from 'next/image';
import arrow from "../../../../public/images/arrowDwon.png"
import arrowtop from "../../../../public/images/arrowtop.png"
import CustomDropdown from '@/components/home/tabs/CustomDropdown';
const years=[
    
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    
  ]

const Year = () => {
    const [showBudgetBoxDropdown, setBudgetBoxDropdown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const [selectedOption, setSelectedOption] = useState(0);
    const dropdownRef2 = useRef(null);

    const handleClickOutside = (event) => {
        // if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
        //     setIsOpen(false);
        //     toggleDropdown();
        // }
    };
     useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setBudgetBoxDropdown(!showBudgetBoxDropdown);
    };
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
  return (
    <div ref={dropdownRef2}>
      <div className="z-10" 
      
      >
          <button className="flex flex-row justify-between items-center w-[412px] h-[60px] border-[#D3D3D6] border-[1px]   py-[10px] px-[16px]"
          onClick={toggleDropdown}
          >
            <span className=" text-[#141415] font-normal">Year</span>
            <span
                    className={`${isOpen ? 'transform rotate-180' : ''} transition-transform duration-300`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 18 11" fill="none">
                            <path
                                d="M0.505599 0.880401C0.586879 0.798915 0.683436 0.734265 0.78974 0.690154C0.896044 0.646043 1.01001 0.623337 1.1251 0.623337C1.24019 0.623337 1.35415 0.646043 1.46046 0.690154C1.56676 0.734265 1.66332 0.798915 1.7446 0.880401L9.0001 8.13765L16.2556 0.880401C16.4199 0.716099 16.6427 0.623796 16.8751 0.623796C17.1075 0.623796 17.3303 0.716099 17.4946 0.880401C17.6589 1.0447 17.7512 1.26754 17.7512 1.4999C17.7512 1.73226 17.6589 1.9551 17.4946 2.1194L9.6196 9.9944C9.53832 10.0759 9.44176 10.1405 9.33546 10.1846C9.22915 10.2288 9.11519 10.2515 9.0001 10.2515C8.88501 10.2515 8.77104 10.2288 8.66474 10.1846C8.55844 10.1405 8.46188 10.0759 8.3806 9.9944L0.505599 2.1194C0.424114 2.03812 0.359464 1.94156 0.315352 1.83526C0.271241 1.72895 0.248535 1.61499 0.248535 1.4999C0.248535 1.38481 0.271241 1.27085 0.315352 1.16454C0.359464 1.05824 0.424114 0.96168 0.505599 0.880401Z"
                                fill="#141415"
                             />
                       </svg>
                </span>
          </button>
          {showBudgetBoxDropdown && (
              <div
                className="absolute pb-7 pt-2 px-2 z-10 mt-1 w-[412px]  bg-white border  text-base shadow-lg   focus:outline-none sm:text-sm"
                
                
              >
                
                <div className="w-[400px] h-[110px] bg-[#FFFFFF] p-[14px] ">
                  
                  <div className="p-4 flex flex-row justify-between">
                    <div className="flex flex-col h-[130px] ">
                      <p className="mb-[7px]">Min</p>
                    <span className="    text-[#141415] font-normal w-[150px] border-[1px] pr-[5px] border-solid border-black" >
                   <CustomDropdown options={years} initialValue="Any" HoverPurple={"true"} />
                    </span>
                      
                    </div>
                    <div className="flex flex-col h-[130px] ">
                      <p className="mb-[7px]">Max</p>
                    <span className="    text-[#141415] font-normal w-[150px] border-[1px] pr-[5px] border-solid border-black ">
                   <CustomDropdown  options={years} initialValue="$180,000" HoverPurple={true} />
                    </span>
                      
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
    </div>
  )
}

export default Year
