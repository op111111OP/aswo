"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useLocalStorage("userId", {});
  const [senter, setSenter] = useLocalStorage("senter", []);
  const [onCard, setOnCard] = useLocalStorage("onCard", "");

  //   const [userId, setUserId] = useState({});
  //   const [senter, setSenter] = useState([]);
  //   const [onCard, setOnCard] = useState("");
  useEffect(() => {
    setSenter((prevOnCard) => {
      const existingIndex = prevOnCard.findIndex(
        (obj) => obj.name === userId.name
      );
      if (existingIndex === -1) {
        return [...prevOnCard, userId];
      } else {
        return prevOnCard;
      }
    });
  }, [userId]);

  useEffect(() => {
    const handleRemoveItem = (indexToRemove) => {
      setSenter((prevSenter) => {
        return prevSenter.filter((obj) => obj.name !== indexToRemove);
      });
    };
    handleRemoveItem(onCard);
  }, [onCard]);

  return (
    <UserContext.Provider
      value={{ userId, setUserId, senter, setSenter, onCard, setOnCard }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
