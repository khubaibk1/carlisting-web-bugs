import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import NewUsed from "./NewUsed";
import ClearAll from "./ClearAll";
import CustomDropdown from "@/components/home/tabs/CustomDropdown";
import Year from "./Year";
import Price from "./Price";
import PriceType from "./PriceType";
import CustomDropdown2 from "./CustomDropdown2";


const Make=[
    
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    
  ]

const Model = ({ isOpen, onClose }) => {
    const [selectedTab, setSelectedTab] = useState("card");
    const modalRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <div
            className={`fixed z-[10]  top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? "" : "hidden"
                }`}
        >
            <div
                ref={modalRef}
                className="bg-white w-[430px] md:h-[700px] overflow-hidden md:w-[492x]  justify-center items-center  shadow-md "
            >
                <div className="flex items-center justify-between w-full border-b ">
                    <p className="text-[24px] font-[500] py-2 md:py-3 px-4 md:px-8">
                        Vehicle Filters
                    </p>
                    <svg onClick={onClose} className="mr-7 mt-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M0.291848 0.317792C0.47896 0.131308 0.732598 0.0265619 0.99705 0.0265619C1.2615 0.0265619 1.51514 0.131308 1.70225 0.317792L5.98669 4.59317L10.2711 0.317792C10.3931 0.18671 10.5483 0.0908837 10.7202 0.0404102C10.8922 -0.0100634 11.0746 -0.0133156 11.2483 0.030996C11.422 0.0753075 11.5805 0.165542 11.707 0.292193C11.8336 0.418844 11.9237 0.577222 11.9676 0.750641C12.0121 0.923749 12.009 1.10561 11.9586 1.27711C11.9083 1.44861 11.8126 1.6034 11.6815 1.72521L7.3971 6.00059L11.6815 10.276C11.8129 10.3977 11.9089 10.5525 11.9595 10.7241C12.0101 10.8957 12.0133 11.0778 11.9689 11.2511C11.9245 11.4244 11.8341 11.5825 11.7072 11.7089C11.5803 11.8352 11.4216 11.925 11.2478 11.9689C11.0743 12.0132 10.892 12.0101 10.7202 11.9599C10.5483 11.9097 10.3932 11.8141 10.2711 11.6834L5.98669 7.40802L1.70225 11.6834C1.51296 11.8592 1.26275 11.9549 1.00419 11.9505C0.745642 11.946 0.498889 11.8417 0.315798 11.6595C0.133186 11.4768 0.0286623 11.2306 0.024196 10.9726C0.0197296 10.7145 0.115668 10.4649 0.291848 10.276L4.57629 6.00059L0.291848 1.72521C0.104968 1.5385 0 1.2854 0 1.0215C0 0.757611 0.104968 0.504508 0.291848 0.317792Z" fill="#672797" />
                    </svg>

                </div>
                <div className="flex flex-col items-center justify-center gap-y-2 w-full mt-4 ">
                    <NewUsed/>
                    <ClearAll/>
                    <CustomDropdown2  options={Make} initialValue="Make" HoverPurple={true} scroll={false} set={true}/>
                    <CustomDropdown2   options={Make} initialValue="Model" HoverPurple={true} scroll={false} set={true}/>
                    <CustomDropdown2   options={Make} initialValue="Milage" HoverPurple={true} scroll={false} set={true}/>
                    <CustomDropdown2   options={Make} initialValue="Distance" HoverPurple={true} scroll={false} set={true}/>
                    <PriceType/> 
                    <Price/>
                    <Year/>

                </div>
            </div>
        </div>
    );
};

export default Model;
