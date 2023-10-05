import { createContext, useState } from "react";

export const ModalCartContext = createContext();

export const ModalCartProvider = ({ children }) => {
  const [modalCart, setModalCart] = useState(false);
  return (
    <ModalCartContext.Provider value={[modalCart, setModalCart]}>
      {children}
    </ModalCartContext.Provider>
  );
};
