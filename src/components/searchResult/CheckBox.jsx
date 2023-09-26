import React, { useState } from "react";

const CheckBox = ({ BoxName, Value, selected, onChange }) => {
  return (
    <div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={`${Value}-checkbox`}
          name="myCheckboxGroup"
          className="form-checkbox h-5 w-5 text-indigo-600"
          checked={selected}
          onChange={() => onChange(Value)}
        />
        <label htmlFor={`${Value}-checkbox`} className="ml-2">
          {Value}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
