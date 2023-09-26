
import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown";
import PriceDropdown from "./PriceDropdown";
import { Switch } from "antd";
import { useRouter } from "next/router";

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
const trim = [
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


const TabsLarge = () => {
    const [activeTab, setActiveTab] = useState("used");
    const [subTab, setSubTab] = useState("clear");
    const router=useRouter();
    const renderSubTabsContent = () => {
        if (activeTab === "used") {
            return (
                <div className="">
                    <div className="flex gap-3 text-[18px] w-[570px]  ">
                        <button
                            className={`${subTab === "clear" ? "bg-[#E15B3E] text-white " : " text-black"
                                } px-4 font-[600] py-4 w-1/2 rounded-[10px]`}
                            onClick={() => setSubTab("clear")}
                        >
                            Used Clear
                        </button>
                        <button
                            className={`${subTab === "all" ? "bg-[#E15B3E] text-white " : " text-black"
                                } px-4 font-[600] w-1/2 py-4 rounded-[10px]`}
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
                    <div className="flex gap-3 w-[570px] text-[18px]  rounded-[20px]">
                        <button
                            className={`${subTab === "clear" ? "bg-[#E15B3E] text-white " : " text-black"
                                } px-2 font-[600] py-4 w-1/2 rounded-[10px]`}
                            onClick={() => setSubTab("clear")}
                        >
                            New Clear
                        </button>
                        <button
                            className={`${subTab === "all" ? "bg-[#E15B3E] text-white " : " text-black"
                                } px-2 font-[600] w-1/2 py-4 rounded-[10px]`}
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
        <div className="md:flex hidden  flex-col justify-center items-center absolute left-0 right-0 top-[50.5rem] bottom-0">
            <div className="flex w-[600px] h-[75px] bg-white rounded-[20px]">
                <div className="flex gap-3 w-full px-2 py-2">
                    <button
                        className={`${activeTab === "used"
                            ? "bg-[#672797] text-white "
                            : "bg-white text-black"
                            } px-2 text-[18px] font-[600] py-3 w-1/2 rounded-[15px]`}
                        onClick={() => setActiveTab("used")}
                    >
                        Used
                    </button>
                    <button
                        className={`${activeTab === "new"
                            ? "bg-[#672797] text-white "
                            : "bg-white text-black"
                            } px-2 text-[18px] font-[600] w-1/2 py-3 rounded-[15px]`}
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
                <div className="bg-white mt-3 rounded-[10px]   border w-[590px] ">
                    <div className="flex-wrap flex w-full gap-[1px]">
                        <CustomDropdown options={make} initialValue="Make" />
                        <p className="border-r"></p>
                        <CustomDropdown options={model} initialValue="Model" />
                        <p className="border-r"></p>
                        <CustomDropdown options={minYear} initialValue="Min Year" />
                        <p className="border-r"></p>
                        <CustomDropdown options={maxYear} initialValue="Max Year" />
                        <p className="border-b w-full"></p>
                    </div>
                    <div className="flex w-full border-b">
                        <div className="w-1/2 border-r">
                            <PriceDropdown options={price} initialValue="Price" />
                        </div>
                        <div className="w-1/2">
                            <PriceDropdown options={mileage} initialValue="Mileage" />
                        </div>
                    </div>
                    <div className="px-6 flex items-center justify-between gap-8 h-[50px] border-b">
                        <div className="flex-1 flex items-center gap-2 pr-5 border-r h-full">
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "8px" }}
                            />
                            <p>Clean</p>
                        </div>
                        <div className="flex-1 flex items-center gap-2 pr-5 border-r h-full">
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "8px" }}
                            />
                            <p>Owner</p>
                        </div>
                        <div className="flex-1 flex items-center gap-2">
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "8px" }}
                            />
                            <p>Certified</p>
                        </div>
                    </div>
                    <div className="px-6 flex items-center justify-between h-[50px] ">
                        <div className="flex-1 flex items-center gap-3 border-r h-full ">
                            <p>Current Location</p>
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "2px" }}
                            />
                        </div>
                        <div className="flex justify-center items-center border-r ">
                            <input
                                type="text"
                                placeholder="ZIP"
                                className="focus:outline-none w-1/4"
                            />
                        </div>
                        <div>
                            <CustomDropdown options={distance} initialValue="Distance" />
                        </div>
                    </div>
                </div>
            ) : (

                <div className="bg-white mt-3 rounded-[10px]   border w-[590px] ">
                    <div className="flex-wrap flex w-full gap-x-[40px] ">
                        <CustomDropdown options={make} initialValue="Make" />
                        <p className="border-r"></p>
                        <CustomDropdown options={model} initialValue="Model" />
                        <p className="border-r"></p>
                        <CustomDropdown options={trim} initialValue="Trim" />
                        <p className="border-b w-full"></p>

                    </div>
                    <div className="flex w-full border-b">
                        <div className="w-1/2 border-r">
                            <PriceDropdown options={price} initialValue="Exterior Color" />
                        </div>
                        <div className="w-1/2">
                            <PriceDropdown options={mileage} initialValue="Interior Color" />
                        </div>
                    </div>
                    <div className="px-6 flex items-center justify-between gap-8 h-[50px] border-b">
                        <div className="flex-1 flex items-center gap-2 pr-5 border-r h-full">
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "8px" }}
                            />
                            <p>M or less</p>
                        </div>
                        <div className="flex-1 flex items-center gap-2 pr-5  h-full">
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "8px" }}
                            />
                            <p>Available now</p>
                        </div>
                    </div>
                    <div className="px-6 flex items-center justify-between h-[50px] ">
                        <div className="flex-1 flex items-center gap-3 border-r h-full ">
                            <p>Current Location</p>
                            <Switch
                                size="small"
                                className="cursor-pointer bg-gray-500"
                                style={{ marginRight: "2px" }}
                            />
                        </div>
                        <div className="flex justify-center items-center border-r ">
                            <input
                                type="text"
                                placeholder="ZIP"
                                className="focus:outline-none w-1/4"
                            />
                        </div>
                        <div>
                            <CustomDropdown options={distance} initialValue="Distance" />
                        </div>
                    </div>
                </div>
            )}
            <button className="text-center text-white text-[20px] mt-5 py-[10px] rounded-[10px] w-[590px] bg-[#09A122]" onClick={() => router.push("/used-car")}>
                Search
            </button>
        </div>
    );
};

export default TabsLarge;
