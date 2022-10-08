import React from "react";

const FieldError = ({ children }) => {
    return (
        <>
            <span className="text-danger">{children}</span>
        </>
    );
};

export default FieldError;
