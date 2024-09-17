import React from "react";
import Account from "../ui/auth/components/Account";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-2 border-b-2 border-blue-300">
      <div className="flex items-center">
        <img
          height={50}
          width={50}
          src="/assets/images/icon-192x192.png"
          alt="Logo"
        />{" "}
        <h6 className="text-3xl font-bold">Medicine</h6>
      </div>
      <Account />
    </nav>
  );
};

export default Nav;
