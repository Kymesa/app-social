import { useState } from "react";
import { AppSocialContext } from "./AppSocialContext";

export const AppSocialProvider = ({ children }) => {
  const [modalCart, setModalCart] = useState(false);
  const [countCart, setCountCart] = useState(0);
  return (
    <AppSocialContext.Provider
      value={[modalCart, setModalCart, countCart, setCountCart]}
    >
      {children}
    </AppSocialContext.Provider>
  );
};
