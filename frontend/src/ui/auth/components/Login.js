import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { toast } from "react-toastify";
import { axiosInstance } from "../../../utils/axios";
import { encryptToken } from "../../../utils/crpto";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axiosInstance.post("/");
      const encrypted = encryptToken(data.token);
      localStorage.setItem("session", encrypted);
      toast.success("Login Success");
      window.location.reload();
    } catch (error) {
      toast.error("Login Error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmit} className="w-full py-3 px-2">
      <Input name="email" required type="email" placeholder="Email" />
      <Input name="password" required type="password" placeholder="Password" />
      <div className="flex justify-end my-3">
        <Button loading={loading} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Login;
