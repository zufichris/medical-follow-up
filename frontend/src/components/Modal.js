import React from "react";
import { Close, X } from "@mui/icons-material";
import Button from "./Button";
const Modal = ({
  open = false,
  toggle = () => {},
  title = "Modal",
  width = 50,
  ...props
}) => {
  return open ? (
    <div
      className="fixed text-blue-600 z-50 top-0 bottom-0 left-0 right-0
    bg-opacity-60 bg-slate-600 flex justify-center items-start p-4"
    >
      <div
        style={{ width: `${width}%` }}
        className={`px-2 mt-4 bg-white shadow-md shadow-slate-800 relative rounded-md`}
      >
        <div className="py-3 px-2">
          <h6 className="font-semibold text-2xl ">{title}</h6>
          <Button
            onClick={toggle}
            className="bg-transparent hover:bg-transparent  absolute top-1 right-1"
          >
            <Close className="text-red-600" />
          </Button>
        </div>
        {props.children}
      </div>
    </div>
  ) : null;
};

export default Modal;
