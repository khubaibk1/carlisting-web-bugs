
import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown";
import PriceDropdown from "./PriceDropdown";
import { Switch } from "antd";

const make = [
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
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
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
];
const Trim = [
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
    "Aston Martin",
];



const FilterMob = () => {
    const [activeTab, setActiveTab] = useState("used");
    const [subTab, setSubTab] = useState("clear");

    const renderSubTabsContent = () => {
        if (activeTab === "used") {
            return (
                <div className="">
                    <div className="flex gap-3 text-[18px] w-[300px] md:w-[570px]  ">
                        <button
                            className={`${subTab === "clear" ? "bg-[#E15B3E] text-white " : " text-black"
                                } px-4 font-[500] md:font-[600] py-2 md:py-4 w-1/2 rounded-[10px]`}
                            onClick={() => setSubTab("clear")}
                        >
                            Used Clear
                        </button>
                        <button
                            className={`${subTab === "all" ? "bg-[#E15B3E] text-white " : " text-black"
                                } px-4 font-[500] md:font-[600] w-1/2 py-2 md:py-4 rounded-[10px]`}
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
                    <div className="flex gap-3 w-[300px] md:w-[570px] text-[18px]  rounded-[20px]">
                        <button
                            className={`${subTab === "clear" ? "bg-[#E15B3E] text-white " : " text-black"
                                } px-2 font-[400] py-2 md:py-4 w-1/2 rounded-[10px]`}
                            onClick={() => setSubTab("clear")}
                        >
                            New Clear
                        </button>
                        <button
                            className={`${subTab === "all" ? "bg-[#E15B3E] text-white " : " text-black"
                                } px-2 font-[400] w-1/2  py-2 md:py-4 rounded-[10px]`}
                            onClick={() => setSubTab("all")}
                        >
                            All New
                        </button>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="flex flex-col md:hidden justify-center items-center mt-[-24rem]">
            <div className="flex w-[320px] md:w-[600px] md:h-[75px] bg-white rounded-md md:rounded-[20px]">
                <div className="flex gap-3 w-full px-2 py-2">
                    <button
                        className={`${activeTab === "used"
                            ? "bg-[#672797] text-white "
                            : "bg-white text-black"
                            } px-2 text-[18px] font-[500] md:font-[600] py-2 md:py-3 w-1/2 rounded-md md:rounded-[15px]`}
                        onClick={() => setActiveTab("used")}
                    >
                        Used
                    </button>
                    <button
                        className={`${activeTab === "new"
                            ? "bg-[#672797] text-white "
                            : "bg-white text-black"
                            } px-2 text-[18px] font-[500] md:font-[600] w-1/2  py-2 md:py-3 rounded-md md:rounded-[15px]`}
                        onClick={() => setActiveTab("new")}
                    >
                        New
                    </button>
                </div>
            </div>
            <div className="bg-[#EDEEF6] rounded-[10px] py-2 px-2 border">
                {renderSubTabsContent()}
            </div>
            {/* used  */}
            {activeTab === 'used' ? (
                <div className="bg-white mt-3 rounded-[10px]   border w-[300px] md:w-[590px] ">
                    <div className="flex-col md:flex-wrap flex md:w-full gap-[1px]">
                        <CustomDropdown options={make} initialValue="Make" />
                        <p className= "border-b md:border-r"></p>
                        <CustomDropdown options={model} initialValue="Model" />
                        <p className="border-b md:border-r"></p>
                        <div className="md:hidden flex justify-center w-full  border-b">
                        <CustomDropdown options={minYear} initialValue="Min Year" />
                        <p className="border-r"></p>
                        <CustomDropdown options={maxYear} initialValue="Max Year" />
                        {/* <p className="border-b w-full"></p> */}

                        </div>
                        <div className="hidden md:flex justify-center w-full border-b ">
                        <CustomDropdown options={minYear} initialValue="Min Year" />
                        <p className="border-r"></p>
                        <CustomDropdown options={maxYear} initialValue="Max Year" />
                        <p className="border-b w-full"></p>

                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col w-full md:border-b">
                        <div className="md:w-1/2 md:border-r border-b">
                            <PriceDropdown options={price} initialValue="Price" />
                        </div>
                        <div className="md:w-1/2 border-b md:border-none">
                            <PriceDropdown options={mileage} initialValue="Mileage" />
                        </div>
                    </div>
                    <div className="md:px-6  flex md:flex-row flex-col md:items-center md:justify-between gap-3 md:gap-8 md:h-[50px] md:border-b">
                        <div className="md:flex-1 px-6 md:px-0 flex items-center gap-2 md:pr-5 md:border-r h-full py-4 md:py-0 border-b">
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "8px" }}
                            />
                            <p>Clean</p>
                        </div>
                        <div className="md:flex-1 px-6 md:px-0 border-b flex-row pb-4 md:pb-0 flex items-center gap-2 md:pr-5 md:border-r h-full">
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "8px" }}
                            />
                            <p>Owner</p>
                        </div>
                        <div className="md:flex-1 px-6 pb-4 md:px-0 md:pb-0 border-b md:border-none    flex items-center gap-2">
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "8px" }}
                            />
                            <p>Certified</p>
                        </div>
                    </div>
                    <div className="md:px-6 flex md:flex-col flex-col items-start md:items-center md:justify-between md:h-[50px] ">
                        <div className="md:flex-1 flex md:flex-row flex-row-reverse pr-24 md:pr-0 py-4 md:py-0 border-b md:border-none  items-center w-full md:w-auto gap-3 md:border-r h-full ">
                            <p>Current Location</p>
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "2px" }}
                            />
                        </div>
                        <div className="flex items-center w-full">
                        <div className=" justify-center items-center border-r md:hidden flex">
                            <input
                                type="text"
                                placeholder="ZIP"
                                className="focus:outline-none w-1/4"
                            />
                        </div>
                        <div className="block md:hidden">
                            <CustomDropdown options={distance} initialValue="Distance" />
                        </div>

                        </div>
                        <div className=" justify-center items-center border-r hidden md:flex">
                            <input
                                type="text"
                                placeholder="ZIP"
                                className="focus:outline-none w-1/4"
                            />
                        </div>
                        <div className="md:block hidden">
                            <CustomDropdown options={distance} initialValue="Distance" />
                        </div>
                    </div>
                </div>
            ) : (

                <div className="bg-white mt-3 rounded-[10px]   border w-[300px] md:w-[590px] ">
                    <div className="flex-col md:flex-wrap flex w-full gap-x-[40px] ">
                        <CustomDropdown options={make} initialValue="Make" />
                        <p className="border-b"></p>
                        <CustomDropdown options={model} initialValue="Model" />
                        <p className="border-b"></p>
                        <CustomDropdown options={Trim} initialValue="Trim" />
                        <p className="border-b w-full"></p>

                    </div>
                    <div className="flex md:flex-row flex-col w-full border-b">
                        <div className="md:w-1/2 border-b">
                            <PriceDropdown options={price} initialValue="Exterior Color" />
                        </div>
                        <div className="md:w-1/2">
                            <PriceDropdown options={mileage} initialValue="Interior Color" />
                        </div>
                    </div>
                    <div className=" flex md:flex-row flex-col md:items-center md:justify-between gap-8 h-[50px]">
                        <div className="flex-1 px-6  flex items-center gap-2 pr-5 md:border-r h-full pt-3">
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "8px" }}
                            />
                            <p>M or less</p>
                        </div>
                        <div className="md:flex-1 flex px-6 border-b pb-4  items-center gap-2  h-full">
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "8px" }}
                            />
                            <p>Available now</p>
                        </div>
                    </div>
                    <div className="flex flex-col  border-t items-start md:h-[50px] pt-9 md:mt-0">
                        <div className="flex flex-row-reverse px-6  items-center justify-start mt-10 gap-3 ">
                            <p>Current Location</p>
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "2px" }}
                            />
                        </div>
                        <div className="flex border-t  justify-center items-center md:border-r mt-4 pr-6">
                            <div className="w-1/2 border-r h-full">
                            <input
                                type="text"
                                placeholder="ZIP"
                                className="focus:outline-none w-1/2 pl-6 "
                            />
                                
                            </div>
                      
                            <CustomDropdown options={distance} initialValue="Distance" />
                        </div>
                    </div>
                </div>
            )}
            <button className="text-center text-white text-[16px] md:text-[20px] mt-5 py-[10px] rounded-[10px] w-[300px] md:w-[590px] bg-[#09A122]">
                Search
            </button>
        </div>
    );
};

export default FilterMob;
