import React from "react";

const Label = (htmlFor, required) => {
  return <label htmlFor={htmlFor}>{required === true && "*"}</label>;
};

export default Label;
