"use client";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [id, setId] = useState([]);
  // ---------
  const [numBas, setNumBas] = useState(0);
  //   --------------
  const [userId, setUserId] = useState(1);
  const [senter, setSenter] = useState([]);
  const [onCard, setOnCard] = useState("");
  const [onIds, seOnIds] = useState();
  const [numB22, setNumB22] = useState([]);
  const [trueHedLoc, setTrueHedLoc] = useState(false);

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
    }
  }, [userId]);

  useEffect(() => {
    if (numBas === 1) {
      const handleRemoveItem = () => {
        setSenter((prevSenter) => {
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
        onIds,
        seOnIds,
        numB22,
        setNumB22,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
