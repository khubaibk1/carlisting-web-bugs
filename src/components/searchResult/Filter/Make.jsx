import React, { useState } from "react";
import Dropdown from "../Dropdown";

const Make = () => {
    
    const [toggle, setToggle] = useState(false);
    const BMWList = [
        "Aston Martin",
        "Audi",
        "BMW",
        "Chevrolet",
        "Ford",
        "Mercedes-Benz",
        "Porsche",
        "Toyota",
        "Volkswagen",
      ];

  return (
    <div>
      <div>
        <button
          className={`flex flex-row justify-around items-center  h-[42px]  border-[2px] rounded-[24px]  ${
            toggle ? "border-blue-500" : ""
          }`} 
          onClick={() => setToggle(true)}
          style={{ width: "auto", display: "flex" }}
        >
          <span className="text-[#141415] font-normal"style={{ flex: 1 }}>
            <Dropdown options={BMWList} initialValue="BMW" scroll={true} toggle={toggle} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Make;
