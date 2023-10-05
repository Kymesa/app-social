import { createContext, useState } from "react";

export const ModalCartContext = createContext();

export const ModalCartProvider = ({ children }) => {
  const [modalCart, setModalCart] = useState(false);
  const [countCart, setCountCart] = useState(0);
  return (
    <ModalCartContext.Provider
      value={[modalCart, setModalCart, countCart, setCountCart]}
    >
      {children}
    </ModalCartContext.Provider>
  );
};
