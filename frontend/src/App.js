import React from "react";
import Dashboard from "./ui/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <React.Fragment>
      <Dashboard />
      <ToastContainer />
    </React.Fragment>
  );
};

export default App;
