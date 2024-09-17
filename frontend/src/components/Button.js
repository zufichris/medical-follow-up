import React from "react";
import Loader from "./Loader";

const Button = ({ loading = false, ...props }) => {
  return (
    <button
      disabled={loading || props.disabled}
      {...props}
      className={`bg-blue-600 font-semibold text-white shadow-sm
        enabled:hover:scale-105 hover:bg-blue-800 transition-all disabled:opacity-45 rounded-md px-3 py-1.5 m-0.5 flex items-center justify-center  ${props.className}`}
    >
      {loading ? (
        <>
          Loaing <Loader />
        </>
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
