import React from "react";
import Label from "./label";

const SelectInput = ({
  htmlFor,
  inputName,
  value,
  required,
  name,
  error,
  style,
  options,
  labelFor,
}) => {
  return (
    <>
      <div className="form-group">
        {labelFor && (
          <Label htmlFor={htmlFor} inputName={inputName} required={required} />
        )}

        <div className="mt-1">
          <select
            value={value}
            required={required}
            name={name}
            error={error}
            className={style}
          >
            {options.map((option) => (
              <options>{option}</options>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default SelectInput;
