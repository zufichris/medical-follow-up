import axios from "axios";
import { decryptToken } from "./crpto";
const authToken = localStorage.getItem("session");
const decrypted = decryptToken(authToken);
export const axiosInstance = axios.create({
  baseURL: "/",
  headers: {
    Authorization: decrypted,
  },
});
