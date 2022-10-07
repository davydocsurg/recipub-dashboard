import React from "react";
import Label from "./label";

const Input = (
  labelFor,
  type,
  style,
  label,
  placeholder,
  value,
  loading,
  disabled,
  required,
  name,
  id
) => {
  return (
    <>
      <Label htmlFor={labelFor} required={required} />

      <input
        type={type}
        aria-label={label}
        placeholder={placeholder}
        style={style}
        value={value}
        loading={loading}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
      />
    </>
  );
};

export default Input;
