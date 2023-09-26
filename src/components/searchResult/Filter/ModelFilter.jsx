import React, { useState } from "react";
import Dropdown from "../Dropdown";

const ModelFilter = () => {
     const [isToggled,setIsToggled]=useState(false)
    const Make = [
        "double exhast engine",
        "Aston Martin",
        "Aston Martin",
        "Aston Martin",
        "Aston Martin",
        "Aston",
      ];
      const [toggle, setToggle] = useState(false);
      
  return (

    <div>
        
      <button className={`flex flex-row justify-around items-center w-[auto]   border-[2px] rounded-[24px] h-[42px] ${
            toggle
              ? "border-[#09A122]"
              : isToggled
              ? "border-blue-500"
              : ""
          }`}
          onClick={() => setToggle(true)}
        //   style={{ width: "auto", display: "flex" }}
      >
            <span className="text-[#141415] font-normal" style={{ flex: 1 }}>
              <Dropdown
                options={Make}
                initialValue="2 Series Gran coupe"
                scroll={false}
                
                
              />
            </span>

          </button>
    </div>
  )
}

export default ModelFilter
