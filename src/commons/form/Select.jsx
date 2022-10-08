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
    setOptions,
}) => {
    const updateValue = (e) => {
        setOptions({
            ...options,
            options: e.target.value,
        });
    };

    return (
        <>
            <div className="form-group">
                {labelFor && (
                    <Label
                        htmlFor={htmlFor}
                        inputName={labelFor}
                        required={required}
                    />
                )}

                <div className="mt-1">
                    <select
                        required={required}
                        name={name}
                        error={error}
                        className={style}
                    >
                        {options.map((opt, i) => (
                            <option key={i} onChange={updateValue}>
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
