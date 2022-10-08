import React from "react";
import Label from "./label";
import FieldError from "./FieldError";

const Input = ({
    labelFor,
    type,
    style,
    label,
    placeholder,
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
                    <Label
                        htmlFor={name}
                        inputName={labelFor}
                        required={required}
                    />
                )}

                <div className="mt-1">
                    <input
                        type={type}
                        aria-label={label}
                        placeholder={placeholder}
                        className={"form-control " + style}
                        disabled={disabled}
                        required={required}
                        name={name}
                        id={id}
                    />
                </div>
                {error && <FieldError>{error}</FieldError>}
            </div>
        </>
    );
};

export default Input;
