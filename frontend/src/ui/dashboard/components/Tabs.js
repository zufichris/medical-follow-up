import { Alarm, CellTower, ControlPoint } from "@mui/icons-material";
import React from "react";

const Tabs = ({ activeTab = 1, setActiveTab = (activeTab) => {} }) => {
  return (
    <div className="w-1/12">
      <div
        onClick={() => setActiveTab(1)}
        className={`flex ${
          activeTab === 1 ? "bg-blue-200" : ""
        }  flex-col justify-center items-center p-5 rounded-md my-3 cursor-pointer mx-1`}
      >
        <ControlPoint />
        <span className="text-sm font-bold">Prescription</span>
      </div>
      <div
        onClick={() => setActiveTab(2)}
        className={`flex ${
          activeTab === 2 ? "bg-blue-200" : ""
        }  flex-col justify-center items-center p-5 rounded-md my-3 cursor-pointer mx-1`}
      >
        <Alarm />
        <span className="text-sm font-bold">Reminders</span>
      </div>
      <div
        onClick={() => setActiveTab(3)}
        className={`flex ${
          activeTab === 3 ? "bg-blue-200" : ""
        }  flex-col justify-center items-center p-5 rounded-md my-3 cursor-pointer mx-1`}
      >
        <CellTower />
        <span className="text-sm font-bold">Tracker</span>
      </div>
    </div>
  );
};

export default Tabs;
