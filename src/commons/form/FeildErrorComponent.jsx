import React from "react";

const FeildErrorComponent = ({ children }) => {
  return (
    <>
      <div className="text-danger">{children}</div>
    </>
  );
};
