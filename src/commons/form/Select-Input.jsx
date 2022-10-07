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
}) => {
  return (
    <>
      <Label htmlFor={htmlFor} inputName={inputName} required={required} />
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
    </>
  );
};

export default SelectInput;
