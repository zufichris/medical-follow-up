import CryptoJS from "crypto-js";
import { environment } from "../config/envConfig";

export const encryptToken = (token) => {
  const encryptedToken = CryptoJS.AES.encrypt(
    token,
    environment.encryption_key
  ).toString();
  return encryptedToken;
};

export const decryptToken = (encryptedToken) => {
  if (!encryptedToken) return;
  const decryptedToken = CryptoJS.AES.decrypt(
    encryptedToken?.toString(),
    environment.encryption_key
  ).toString(CryptoJS.enc.Utf8);
  return decryptedToken;
};
