import React from "react";

const Button = ({ type, style, text, loading, disabled }) => {
    return (
        <>
            <button
                type={type}
                className={"btn " + style}
                loading={loading}
                disabled={disabled}
            >
                {text}
            </button>
        </>
    );
};

export default Button;
