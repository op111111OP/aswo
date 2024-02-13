"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [id, setId] = useLocalStorage("Id", "");
  const [numBas, setNumBas] = useState(0);
  const [userId, setUserId] = useState(1);
  const [senter, setSenter] = useState([]);
  //   const [onCard, setOnCard] = useState("");
  const [onIds, seOnIds] = useState();
  const [numB22, setNumB22] = useState([]);
  const [trueHedLoc, setTrueHedLoc] = useState(false);
  const [nemeB, setNemeB] = useState(1);
  const [card, setCard] = useState([]);
  const [onCard, setOnCard] = useLocalStorage("onCard6", []);
  const [onCard1, setOnCard1] = useState(1);
  const [defenseCard, setDefenseCard] = useLocalStorage("defenseCard", []);
  const [idElem, setIdElem] = useLocalStorage("idElem", []);

  useEffect(() => {
    setOnCard(card);
  }, [card]);
  //   function addIcon(res, e) {
  //     if (idElem.indexOf(e) === -1) {
  //       setIdElem([...idElem, e]);
  //       setOnCard([...onCard1, res]);
  //     }
  //   }
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
  console.log(onCard);
  //   useEffect(() => {
  //     if (userId !== 1) {
  //       setSenter((prevOnCard) => {
  //         const existingIndex = prevOnCard.findIndex(
  //           (obj) => obj.name === userId.name
  //         );
  //         if (existingIndex === -1) {
  //           return [...prevOnCard, userId];
  //         } else {
  //           return prevOnCard;
  //         }
  //       });
  //     }
  //   }, [userId]);

  //   useEffect(() => {
  //     if (numBas === 1) {
  //       const handleRemoveItem = () => {
  //         setSenter((prevSenter) => {
  //           return prevSenter.filter((obj) => obj.id !== onCard);
  //         });
  //       };
  //       handleRemoveItem();

  //       setNumBas(5);
  //     }
  //   }, [numBas]);

  return (
    <UserContext.Provider
      value={{
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
        numB22,
        setNumB22,
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
