import React from "react";

const TextArea = ({
  label,
  type,
  placeholder,
  style,
  value,
  disabled,
  required,
  name,
  id,
}) => {
  return (
    <>
      <textarea
        className={style}
        label={label}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
      >
        {value}
      </textarea>
    </>
  );
};
export default TextArea;
