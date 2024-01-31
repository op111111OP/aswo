"use client";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  userId: "",
  setUserId: () => "",
  data: [],
  setData: () => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [userId, setUserId] = useState("");

  return (
    <GlobalContext.Provider value={{ userId, setUserId }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
