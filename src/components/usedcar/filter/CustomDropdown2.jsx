import React, { useState, useEffect, useRef } from 'react';

const CustomDropdown2 = ({ options, initialValue, tab, subTab }) => {
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


        return (
            <div ref={dropdownRef} className="relative">
            <div
                className={` px-3  py-7  flex items-center border  justify-between w-[410px] h-[50px] cursor-pointer`}
                onClick={toggleDropdown}
            >
                <span>{selectedOption}</span>
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
            </div>
            {isOpen && (
                <div className="mt-2 z-50 w-[410] h-[300px] overflow-y-scroll bg-white shadow-lg rounded-md">
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`md:px-2 py-2 cursor-pointer hover:bg-gray-100`}
                            onClick={() => {
                                handleOptionSelect(option);
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
        );
    }


export default CustomDropdown2;
