import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { axiosInstance } from "../../../utils/axios";
import { encryptToken } from "../../../utils/crpto";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.current);
      const { data } = await axiosInstance.post("/login", formData);
      const encrypted = encryptToken(data.token);
      localStorage.setItem(encrypted, "session");
      window.location.reload();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmit} className="w-full py-3 px-2">
      <Input name="username" required type="text" placeholder="Username" />
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

export default Register;
