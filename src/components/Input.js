import React from "react";

const Input = ({ className, value, type, onClick, onChange }) => {
  return (
    <input
      className={className}
      value={value}
      type={type}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default Input;
