import React from "react";
import Label from "./label";

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
}) => {
    return (
        <>
            <div className="form-group">
                {labelFor && (
                    <Label
                        for={name}
                        inputName={labelFor}
                        required={required}
                    />
                )}

                <div className="mt-1">
                    <input
                        type={type}
                        aria-label={label}
                        placeholder={placeholder}
                        className={"form-control" + style}
                        value={value}
                        disabled={disabled}
                        required={required}
                        name={name}
                        id={id}
                    />
                </div>
            </div>
        </>
    );
};

export default Input;
