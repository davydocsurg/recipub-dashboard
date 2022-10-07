import React from "react";

const Button = ({ type, style, text, loading, disabled }) => {
  return (
    <React.Fragment>
      <button
        type={type}
        style={style}
        text={text}
        loading={loading}
        disabled={disabled}
      >
        {children}
      </button>
    </React.Fragment>
  );
};

export default Button;
