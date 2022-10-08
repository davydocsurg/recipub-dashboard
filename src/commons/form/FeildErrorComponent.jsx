import React from "react";

const FeildErrorComponent = ({ children }) => {
  return (
    <>
      <span className="text-danger">{children}</span>
    </>
  );
};
