import React from "react";

const Input = (props) => {
  return (
    <input
      className={`border-2 focus:border-blue-600 border-blue-200 w-full  outline-none my-1  py-1 px-2 placeholder:text-blue-400 rounded-md ${props.className}`}
      {...props}
    />
  );
};

export default Input;
