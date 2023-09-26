    import React, { useState, useEffect, useRef } from 'react';
    import Image from 'next/image';
    import arrow from "../../../public/images/arrowDwon.png";
    import arrowtop from "../../../public/images/arrowtop.png";

    const Dropdown = ({ options, initialValue, scroll }) => {   
        const [isOpen, setIsOpen] = useState(false);
        const [selectedOption, setSelectedOption] = useState(initialValue);
        const dropdownRef = useRef(null);
        


        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };
        
        const handleOptionSelect = (option) => {
            
            setSelectedOption(option);
            
            setIsOpen(false);
        };

        useEffect(() => {
            setSelectedOption(initialValue);
        }, [initialValue]);

        return (
            <div>
                <div ref={dropdownRef} className="relative">
                    <div
                        className={`rounded-md flex items-center gap-[2px] w-[211px] h-[50px] cursor-pointer py-[10px] px-[16px] `}
                        onClick={toggleDropdown}
                        style={{ width: "auto", display: "flex" }}

                    >
                        <span style={{ flex: 1 }}>{selectedOption}</span>
                        <Image src={arrow} />
                    </div>
                    {isOpen && (
                        <div className='z-[999]'>
                            <div className='absolute mt-2 z-50 shadow-xl w-[300px] h-[320px] bg-[#f3f4f4] transform translate-x-[-10px] ' style={{ boxShadow: "0 0  5px rgba(0, 0, 0, 0.5)" }}>
                                <Image src={arrowtop} className="shadow-xl transform translate-y-[5px] ml-[30px]" />
                                <div className={`w-[300px] h-[300px] absolute   ${scroll ? 'overflow-y-scroll' : ''} bg-white z-50 text-left`}>
                                    {options.map((option) => (
                                        <div
                                            key={option}
                                            className={`px-2 py-2 cursor-pointer hover:bg-[#672797] hover:text-[#fff]`}
                                            onClick={() => {
                                                handleOptionSelect(option);
                                               
                                            }}
                                        >
                                                {option}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    export default Dropdown;
