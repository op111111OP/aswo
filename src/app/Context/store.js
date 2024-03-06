"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [id, setId] = useLocalStorage("Id", "");
  const [idElem, setIdElem] = useLocalStorage("idElem", []);
  const [defenseCard, setDefenseCard] = useLocalStorage("defenseCard", []);
  const [numBas, setNumBas] = useState(0);
  const [userId, setUserId] = useState(1);
  const [senter, setSenter] = useState([]);
  const [onIds, seOnIds] = useState();
  const [trueHedLoc, setTrueHedLoc] = useState(false);
  const [nemeB, setNemeB] = useState(1);
  const [card, setCard] = useState([]);
  const [onCard, setOnCard] = useLocalStorage("onCard6", []);
  const [onCard1, setOnCard1] = useState(1);
  const [delcard, setDelcard] = useState(1);

  useEffect(() => {
    if (delcard !== 1) {
      setOnCard(card);
      setDelcard(3);
    }
  }, [card]);

  useEffect(() => {
    const addToArray = (newItem) => {
      if (onCard1 !== 1) {
        const existingIndex = onCard.findIndex((obj) => obj.id === newItem.id);
        if (existingIndex === -1) {
          setOnCard([...onCard, newItem]);
        }
      }
    };
    addToArray(onCard1);
  }, [onCard1]);

  return (
    <UserContext.Provider
      value={{
        delcard,
        setDelcard,
        defenseCard,
        setDefenseCard,
        setIdElem,
        idElem,
        card,
        setCard,
        onCard1,
        setOnCard1,
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
        trueHedLoc,
        setTrueHedLoc,
        nemeB,
        setNemeB,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
