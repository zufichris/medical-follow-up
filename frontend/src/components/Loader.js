import { Circle, CircleOutlined } from "@mui/icons-material";
import React from "react";

const Loader = () => {
  return (
    <div className="relative animate-spin">
      <CircleOutlined className="h-full w-full p-0 m-0" />
      <span className="font-black m-0 p-0 text-2xl  absolute top-0 end-0">
        -
      </span>
    </div>
  );
};

export default Loader;
