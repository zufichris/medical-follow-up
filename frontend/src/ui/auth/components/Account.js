import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { AccountCircle } from "@mui/icons-material";
import Auth from "../Auth";
import { decryptToken } from "../../../utils/crpto";

const Account = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getToken = () => {
      const auth = localStorage.getItem("session");
      const decrypted = decryptToken(auth);
      if (decrypted) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    };
    getToken();
  }, []);
  return (
    <React.Fragment>
      {isSignedIn ? (
        <div className="flex flex-col cursor-pointer justify-center items-center">
          <AccountCircle />
          <span className="font-bold">{user?.name ?? "user-xt-363"}</span>
        </div>
      ) : (
        <Button onClick={() => setAuthModal(true)}>Login</Button>
      )}
      <Auth
        open={authModal}
        onSignIn={(user) => {
          setIsSignedIn(true);
          setUser(user);
          setAuthModal(false);
        }}
        toggle={() => setAuthModal(false)}
      />
    </React.Fragment>
  );
};

export default Account;
