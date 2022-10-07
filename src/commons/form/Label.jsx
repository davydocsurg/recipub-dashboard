import React from "react";

const Label = ({ htmlFor, inputName, required }) => {
    return (
        <label for={htmlFor}>
            {inputName}
            {required === true && <span className="text-danger">*</span>}
        </label>
    );
};

export default Label;
