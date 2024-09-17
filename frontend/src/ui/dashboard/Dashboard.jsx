import React, { useState } from "react";
import Account from "../auth/components/Account";
import { Tablet, Alarm, ControlPoint, CellTower } from "@mui/icons-material";
import Modal from "../../components/Modal";
import Prescriptions from "../pescription/Prescriptions";
import Reminders from "../reminder/Reminders";
import Tracker from "../tracker/Tracker";
import Nav from "../../components/Nav";
import Tabs from "./components/Tabs";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className=" text-blue-500 bg-white">
      <Nav />
      <div className="relative h-full flex">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full p-2 overflow-y-scroll">
          <Prescriptions open={activeTab === 1} />
          <Reminders open={activeTab === 2} />
          <Tracker open={activeTab === 3} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
