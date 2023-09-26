import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import Tabs from "../home/tabs/Tabs";
import { useRouter } from "next/router";
import { Switch } from "antd";
import CustomDropdown from "../home/tabs/CustomDropdown";
import PriceDropdown from "../home/tabs/PriceDropdown";
import FilterDropdown from "./FilterDropdown";  

const make = [
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
 
];
const model = [
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  
];
const price = [
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",

];
const distance = [
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  
];
const mileage = [
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
 
];
const minMileage = [
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  
];
const maxMileage = [
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  
];

const minYear = [
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  
];
const maxYear = [
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  
];

const owner = [
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
];

const MobileFilter = ({ isOpen, onClose }) => {
  //Mobile

  const [activeTab, setActiveTab] = useState("used");
  const [subTab, setSubTab] = useState("clear");

  const router = useRouter();

  const handleSearchClick = () => {
    router.push("/used-car");
  };

  const renderSubTabsContent = () => {
    if (activeTab === "used") {
      return (
        <div className="">
          <div className="flex gap-3 text-[18px] w-[310px] h-[45px]  ">
            <button
              className={`${
                subTab === "clear" ? "bg-[#E15B3E] text-white " : " text-black"
              } px-4 font-[600]  w-[149px] h-[45px] rounded-[5px]`}
              onClick={() => setSubTab("clear")}
            >
              Used Clear
            </button>
            <button
              className={`${
                subTab === "all" ? "bg-[#E15B3E] text-white " : " text-black"
              } px-4 font-[600] w-[149px]  h-[45px] rounded-[5px]`}
              onClick={() => setSubTab("all")}
            >
              All Used
            </button>
          </div>
        </div>
      );
    } else if (activeTab === "new") {
      return (
        <div className="">
          <div className="flex gap-3 w-[310px] text-[18px] h-[45px]  rounded-[20px]">
            <button
              className={`${
                subTab === "clear" ? "bg-[#E15B3E] text-white " : " text-black"
              } px-2 font-[600]  w-[149px] h-[45px] rounded-[5px]`}
              onClick={() => setSubTab("clear")}
            >
              New Clear
            </button>
            <button
              className={`${
                subTab === "all" ? "bg-[#E15B3E] text-white " : " text-black"
              } px-2 font-[600]  w-[149px]  h-[45px] rounded-[5px]`}
              onClick={() => setSubTab("all")}
            >
              All New
            </button>
          </div>
        </div>
      );
    }
  };

  //mobile

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
    <div className="block sm:block md:hidden ">
      <div
        className={`fixed z-[999]  top-0 left-0 w-full h-full bg-black bg-opacity-50  flex justify-center items-center ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div
          ref={modalRef}
          className={`bg-white w-[430px] h-[100%]      justify-center items-center  shadow-md ${activeTab==="new"?"overflow-y-scroll":"overflow-hidden"} ${activeTab==="used"?"overflow-y-scroll":"overflow-hidden"} `}
        >
          <div className="flex items-center justify-between w-full border-b ">
            <p className="text-[24px] font-[500] py-2 md:py-3 px-4 md:px-8">
              Vehicle Filters
            </p>
            <svg
              onClick={onClose}
              className="mr-7 mt-1 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M0.291848 0.317792C0.47896 0.131308 0.732598 0.0265619 0.99705 0.0265619C1.2615 0.0265619 1.51514 0.131308 1.70225 0.317792L5.98669 4.59317L10.2711 0.317792C10.3931 0.18671 10.5483 0.0908837 10.7202 0.0404102C10.8922 -0.0100634 11.0746 -0.0133156 11.2483 0.030996C11.422 0.0753075 11.5805 0.165542 11.707 0.292193C11.8336 0.418844 11.9237 0.577222 11.9676 0.750641C12.0121 0.923749 12.009 1.10561 11.9586 1.27711C11.9083 1.44861 11.8126 1.6034 11.6815 1.72521L7.3971 6.00059L11.6815 10.276C11.8129 10.3977 11.9089 10.5525 11.9595 10.7241C12.0101 10.8957 12.0133 11.0778 11.9689 11.2511C11.9245 11.4244 11.8341 11.5825 11.7072 11.7089C11.5803 11.8352 11.4216 11.925 11.2478 11.9689C11.0743 12.0132 10.892 12.0101 10.7202 11.9599C10.5483 11.9097 10.3932 11.8141 10.2711 11.6834L5.98669 7.40802L1.70225 11.6834C1.51296 11.8592 1.26275 11.9549 1.00419 11.9505C0.745642 11.946 0.498889 11.8417 0.315798 11.6595C0.133186 11.4768 0.0286623 11.2306 0.024196 10.9726C0.0197296 10.7145 0.115668 10.4649 0.291848 10.276L4.57629 6.00059L0.291848 1.72521C0.104968 1.5385 0 1.2854 0 1.0215C0 0.757611 0.104968 0.504508 0.291848 0.317792Z"
                fill="#672797"
              />
            </svg>
          </div>
          <div className={`flex flex-col items-center justify-center  gap-y-2 w-full mt-4  `}>
            <div className={`flex flex-col justify-center items-center `}>
              <div className="w-[322px]  flex items-center justify-center  rounded-[10px]  h-[64px]  border-2 border-solid border-[#D0BCDF]">
                <div className="flex w-[310px] h-[55px] bg-white rounded-[20px]">
                  <div className="flex gap-3 w-full items-center ">
                    <button
                      className={`${
                        activeTab === "used"
                          ? "bg-[#672797] text-white "
                          : "bg-white text-black"
                      }  text-[18px] font-[600]  w-[149px] h-[45px] rounded-[5px]`}
                      onClick={() => setActiveTab("used")}
                    >
                      Used
                    </button>
                    <button
                      className={`${
                        activeTab === "new"
                          ? "bg-[#672797] text-white "
                          : "bg-white text-black"
                      }  text-[18px] font-[600] w-[149px]  h-[45px] rounded-[5px]`}
                      onClick={() => setActiveTab("new")}
                    >
                      New
                    </button>
                  </div>
                </div>
              </div>

              {/* bulk */}

              <div className="w-[322px] flex items-center justify-center  rounded-[10px] py-2 px-2 border-2 mt-[3px] border-solid border-[#D0BCDF]">
                {renderSubTabsContent()}
              </div>
              {/* used  */}
              {activeTab === "used" ? (
                <div className="bg-white mt-[5px] rounded-[10px]   w-[400px] ">
                  <div className="flex flex-row justify-center">
                    <div className="flex-wrap flex flex-col w-[322px] gap-[1px] ">
                      <div className="h-[150px] flex flex-col justify-around">
                        <p className="text-[#141415] text-[20px] font-[500]">
                          Make and Model
                        </p>
                        <div className="border-2 border-solid border-[#D0BCDF]">
                          <FilterDropdown options={make} initialValue="Make"  />
                        </div>

                        <div className=" border-2 border-solid border-[#D0BCDF]">
                          <FilterDropdown
                            options={model}
                            initialValue="Model"
                          />
                        </div>
                      </div>

                      <div className="w-full flex flex-col justify-around h-[170px]">
                        <p className="text-[#141415] text-[20px] font-[500]">
                          Price
                        </p>
                        <div className="w-[322px] flex flex-row justify-between">
                          <div>
                            <p>Min</p>
                            <div className="w-[145px] border-2 border-solid border-[#D0BCDF]">
                              <CustomDropdown
                                options={minYear}
                                initialValue="Any"
                              />
                            </div>
                          </div>

                          <div>
                            <p>Max</p>
                            <div className="w-[145px] border-2 border-solid border-[#D0BCDF]">
                              <CustomDropdown
                                options={maxYear}
                                initialValue="180000"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="w-[322px] border-r mt-[3px] ">
                          <div className="w-[322px] border-2 border-solid border-[#D0BCDF]">
                            <FilterDropdown
                              options={price}
                              initialValue="New Price Type"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className=" flex flex-col items-center justify-between ">
                      <div className="w-full flex flex-col  justify-around h-[115px] "> 
                        <p className="text-[#141415] text-[20px] font-[500]">
                          Mileage
                        </p>
                        <div className="w-[322px] flex flex-row justify-between">
                          <div>
                            <p>Min</p>
                            <div className="w-[145px] border-2 border-solid border-[#D0BCDF]">
                              <CustomDropdown
                                options={minMileage}
                                initialValue="0"
                              />
                            </div>
                          </div>

                          <div>
                            <p>Max</p>
                            <div className="w-[145px] border-2 border-solid border-[#D0BCDF]">
                              <CustomDropdown
                                options={maxMileage}
                                initialValue="0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full flex flex-col justify-around h-[115px]">
                        <p className="text-[#141415] text-[20px] font-[500]">
                          Year
                        </p>
                        <div className="w-[322px] flex flex-row justify-between">
                          <div>
                            <p>Min</p>
                            <div className="w-[145px] border-2 border-solid border-[#D0BCDF]">
                              <CustomDropdown
                                options={minYear}
                                initialValue="Oldest"
                              />
                            </div>
                          </div>

                          <div>
                            <p>Max</p>
                            <div className="w-[145px] border-2 border-solid border-[#D0BCDF]">
                              <CustomDropdown
                                options={maxYear}
                                initialValue="Newest"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-[322px] mt-[5px]">
                    <p className="text-[#141415] text-[20px] font-[500]">
                          Owner
                        </p>
                      <div className="w-[322px] border-2 border-solid border-[#D0BCDF]">
                        <FilterDropdown options={owner} initialValue="Any" />
                      </div>
                    </div>
                  </div>

                  <div className="px-6 flex flex-col items-center justify-between h-[135px] mb-[5px] mt-[5px]">
                    <div>
                    <p className="text-[#141415] text-[20px] font-[500]">
                          Location
                        </p>
                      <div className="w-[322px] border-2 border-solid border-[#D0BCDF] flex-1 flex-row justify-around flex items-center gap-3 border-r h-[50px]  ">
                        <p>Current Location</p>
                        <Switch
                          size="small"
                          className="cursor-pointer bg-gray-500"
                          style={{ marginRight: "2px" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="w-[322px] flex justify-between items-center border-r ">
                        <div className="w-[151px] flex justify-center items-center  border-2 border-solid border-[#D0BCDF] h-[50px]">
                          <input
                            type="text"
                            placeholder="ZIP"
                            className="focus:outline-none w-1/4"
                          />
                        </div>

                        <div className="w-[151px] border-2 border-solid border-[#D0BCDF] h-[50px]">
                          <CustomDropdown
                            options={distance}
                            initialValue="Distance"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="   flex flex-col items-center gap-1  border-b">
                    <div className="border-2 w-[322px] h-[50px] border-solid border-[#D0BCDF]">
                    <div className="flex-1 flex items-center  pr-5 border-r h-[50px] pl-[15px]">
                      <Switch
                        size="small"
                        className="cursor-pointer bg-gray-500"
                        style={{ marginRight: "8px" }}
                      />
                      <p>Clean</p>

                    </div>
                      </div>

                    <div className="border-2 w-[322px] h-[50px] border-solid border-[#D0BCDF]">
                    <div className="flex-1 flex items-center  border-r h-[50px] pl-[15px]">
                      <Switch
                        size="small"
                        className="cursor-pointer bg-gray-500"
                        style={{ marginRight: "8px" }}
                      />
                      <p>Owner</p>
                    </div>
                    </div>
                    <div className="border-2 w-[322px] h-[50px] border-solid border-[#D0BCDF]">
                    <div className="flex-1 flex items-center  h-[50px] pl-[15px]">
                      <Switch
                        size="small"
                        className="cursor-pointer bg-gray-500"
                        style={{ marginRight: "8px" }}
                      />
                      <p>Certified</p>
                    </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white mt-[5px] rounded-[10px]   w-[400px] ">
                  <div className="flex flex-row justify-center">
                    <div className="flex-wrap flex flex-col w-[322px] gap-[1px] ">
                      <div className="h-[150px] flex flex-col justify-around">
                        <p className="text-[#141415] text-[20px] font-[500]">
                          Make and Model
                        </p>
                        <div className="border-2 border-solid border-[#D0BCDF]">
                          <FilterDropdown options={make} initialValue="Make"  />
                        </div>

                        <div className=" border-2 border-solid border-[#D0BCDF]">
                          <FilterDropdown
                            options={model}
                            initialValue="Model"
                          />
                        </div>
                      </div>

                      <div className="w-full flex flex-col justify-around h-[170px]">
                        <p className="text-[#141415] text-[20px] font-[500]">
                          Price
                        </p>
                        <div className="w-[322px] flex flex-row justify-between">
                          <div>
                            <p>Min</p>
                            <div className="w-[145px] border-2 border-solid border-[#D0BCDF]">
                              <CustomDropdown
                                options={minYear}
                                initialValue="Any"
                              />
                            </div>
                          </div>

                          <div>
                            <p>Max</p>
                            <div className="w-[145px] border-2 border-solid border-[#D0BCDF]">
                              <CustomDropdown
                                options={maxYear}
                                initialValue="180000"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="w-[322px] border-r mt-[3px] ">
                          <div className="w-[322px] border-2 border-solid border-[#D0BCDF]">
                            <FilterDropdown
                              options={price}
                              initialValue="New Price Type"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className=" flex flex-col items-center justify-between ">
                      <div className="w-full flex flex-col  justify-around h-[115px] "> 
                        <p className="text-[#141415] text-[20px] font-[500]">
                          Mileage
                        </p>
                        <div className="w-[322px] flex flex-row justify-between">
                          <div>
                            <p>Min</p>
                            <div className="w-[145px] border-2 border-solid border-[#D0BCDF]">
                              <CustomDropdown
                                options={minMileage}
                                initialValue="0"
                              />
                            </div>
                          </div>

                          <div>
                            <p>Max</p>
                            <div className="w-[145px] border-2 border-solid border-[#D0BCDF]">
                              <CustomDropdown
                                options={maxMileage}
                                initialValue="0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full flex flex-col justify-around h-[115px]">
                        <p className="text-[#141415] text-[20px] font-[500]">
                          Year
                        </p>
                        <div className="w-[322px] flex flex-row justify-between">
                          <div>
                            <p>Min</p>
                            <div className="w-[145px] border-2 border-solid border-[#D0BCDF]">
                              <CustomDropdown
                                options={minYear}
                                initialValue="Oldest"
                              />
                            </div>
                          </div>

                          <div>
                            <p>Max</p>
                            <div className="w-[145px] border-2 border-solid border-[#D0BCDF]">
                              <CustomDropdown
                                options={maxYear}
                                initialValue="Newest"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-[322px] mt-[5px]">
                    <p className="text-[#141415] text-[20px] font-[500]">
                          Title
                        </p>
                      <div className="w-[322px] border-2 border-solid border-[#D0BCDF]">
                        <FilterDropdown options={owner} initialValue="Any" />
                      </div>
                    </div>
                    <div className="w-[322px] mt-[5px]">
                    <p className="text-[#141415] text-[20px] font-[500]">
                          Owner
                        </p>
                      <div className="w-[322px] border-2 border-solid border-[#D0BCDF]">
                        <FilterDropdown options={owner} initialValue="Any" />
                      </div>
                    </div>
                    <div className="w-[322px] mt-[5px]">
                    <p className="text-[#141415] text-[20px] font-[500]">
                          Trim
                        </p>
                      <div className="w-[322px] border-2 border-solid border-[#D0BCDF]">
                        <FilterDropdown options={owner} initialValue="Any" />
                      </div>
                    </div>
                  </div>

                  <div className="px-6 flex flex-col items-center justify-between h-[135px] mb-[5px] mt-[5px]">
                    <div>
                    <p className="text-[#141415] text-[20px] font-[500]">
                          Location
                        </p>
                      <div className="w-[322px] border-2 border-solid border-[#D0BCDF] flex-1 flex-row justify-around flex items-center gap-3 border-r h-[50px]  ">
                        <p>Current Location</p>
                        <Switch
                          size="small"
                          className="cursor-pointer bg-gray-500"
                          style={{ marginRight: "2px" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="w-[322px] flex justify-between items-center border-r ">
                        <div className="w-[151px] flex justify-center items-center  border-2 border-solid border-[#D0BCDF] h-[50px]">
                          <input
                            type="text"
                            placeholder="ZIP"
                            className="focus:outline-none w-1/4"
                          />
                        </div>

                        <div className="w-[151px] border-2 border-solid border-[#D0BCDF] h-[50px]">
                          <CustomDropdown
                            options={distance}
                            initialValue="Distance"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="   flex flex-col h-[240px]  items-center gap-1  border-b">
                    <div className="border-2 w-[322px]  border-solid border-[#D0BCDF]">
                    <div className="flex-1 flex items-center  pr-5 border-r h-[50px] pl-[15px]">
                      <Switch
                        size="small"
                        className="cursor-pointer bg-gray-500"
                        style={{ marginRight: "8px" }}
                      />
                      <p>M or Less</p>

                    </div>
                      </div>

                    <div className="border-2 w-[322px] h-[50px] border-solid border-[#D0BCDF]">
                    <div className="flex-1 flex items-center  border-r h-[50px] pl-[15px]">
                      <Switch
                        size="small"
                        className="cursor-pointer bg-gray-500"
                        style={{ marginRight: "8px" }}
                      />
                      <p>Available now</p>
                    </div>
                    </div>
                    
                    <div className="border-2  w-[322px] mt-[4px] h-[50px] border-solid border-[#D0BCDF]">
                    <div className="flex-1 flex items-center   h-[50px] pl-[15px]">
                      <Switch
                        size="small"
                        className="cursor-pointer bg-gray-500"
                        style={{ marginRight: "8px" }}
                      />
                      <p>Must Order</p>
                    </div>
                    </div>

                    <div className="border-2 w-[322px] mt-[4px] h-[50px] border-solid border-[#D0BCDF]">
                    <div className="flex-1 flex items-center  h-[50px] pl-[15px]">
                      <Switch
                        size="small"
                        className="cursor-pointer bg-gray-500"
                        style={{ marginRight: "8px" }}
                      />
                      <p>Waiting list</p>
                    </div>
                    </div>
                    
                   
                  </div>
                </div>
              )}

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
