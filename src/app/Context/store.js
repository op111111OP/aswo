"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useLocalStorage("userId", 1);
  const [senter, setSenter] = useLocalStorage("senter", []);
  const [onCard, setOnCard] = useLocalStorage("onCard", "");
  const [senterLoc, setSenterLoc] = useState([]);
  // ---------
  //   const [id, setId] = useState("");
  const [id, setId] = useLocalStorage("Id", "");
  // ---------
  const [numBas, setNumBas] = useState(0);
  const [numC, setNumC] = useState(0);
  //   --------------
  //   const [userId, setUserId] = useState(1);
  //  const [senter, setSenter] = useState([]);
  //   const [onCard, setOnCard] = useState("");
  useEffect(() => {
    if (userId !== 1) {
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
      setSenterLoc((prevOnCard) => {
        const existingIndex = prevOnCard.findIndex(
          (obj) => obj.name === userId.name
        );
        if (existingIndex === -1) {
          return [...prevOnCard, userId];
        } else {
          return prevOnCard;
        }
      });
    }
  }, [userId]);

  useEffect(() => {
    if (numBas === 1) {
      const handleRemoveItem = () => {
        setSenter((prevSenter) => {
          return prevSenter.filter((obj) => obj.id !== onCard);
        });
        setSenterLoc((prevSenter) => {
          return prevSenter.filter((obj) => obj.id !== onCard);
        });
      };
      handleRemoveItem();

      setNumBas(5);
    }
  }, [numBas]);

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        senter,
        setSenter,
        onCard,
        setOnCard,
        setId,
        id,
        setNumBas,
        numBas,
        senterLoc,
        setSenterLoc,
        numC,
        setNumC,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
