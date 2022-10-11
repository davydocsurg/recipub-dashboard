import React from "react";
import FieldError from "./FieldError";
import Label from "./Label";

const TextArea = ({
  labelFor,
  type,
  placeholder,
  style,
  value,
  disabled,
  required,
  name,
  id,
  error,
}) => {
  return (
    <>
      <div className="form-group">
        {labelFor && (
          <Label htmlFor={name} inputName={labelFor} required={required} />
        )}
        <div className="mt-1">
          <textarea
            className={"form-control " + style}
            labelFor={labelFor}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            name={name}
            id={id}
          >
            {value}
          </textarea>
        </div>
      </div>
      {error && <FieldError>{error}</FieldError>}
    </>
  );
};
export default TextArea;
