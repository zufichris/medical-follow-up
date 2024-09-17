import React from "react";

const Prescriptions = ({ open = false }) => {
  return open ? <div>Prescriptions</div> : null;
};

export default Prescriptions;
