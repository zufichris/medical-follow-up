import React, { useState } from "react";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import Login from "./components/Login";
import Register from "./components/Register";

const Auth = ({ open = false, toggle = () => {}, onSignIn = (user) => {} }) => {
  const [login, setLogin] = useState(true);

  return open ? (
    <Modal title={login ? "Login" : "Register"} open={open} toggle={toggle}>
      <div className="flex p-1">
        <Button
          disabled={login}
          onClick={() => setLogin(true)}
          className={`w-1/2   bg-blue-700 font-normal rounded-full mx-1 shadow-none`}
        >
          Login
        </Button>
        <Button
          disabled={!login}
          onClick={() => setLogin(false)}
          className={`w-1/2  bg-blue-700 font-normal rounded-full mx-1 shadow-none`}
        >
          Register
        </Button>
      </div>
      {login ? <Login /> : <Register />}
    </Modal>
  ) : null;
};

export default Auth;
