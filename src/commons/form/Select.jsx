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
    const selected = (value) => {
        return this.value === value;
    };

    return (
        <>
            <div className="form-group">
                {labelFor && (
                    <Label
                        htmlFor={htmlFor}
                        inputName={inputName}
                        required={required}
                    />
                )}

                <div className="mt-1">
                    <select
                        value={value}
                        required={required}
                        name={name}
                        error={error}
                        className={style}
                    >
                        {options.map((opt) => (
                            <option
                                value={opt.value}
                                selected={selected(opt.value)}
                            >
                                {opt.option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};

export default SelectInput;
