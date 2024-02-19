"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [flutters, setFlutters] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [fol, setFol] = useState(1);
  //   ----
  const [flutters1, setFlutters1] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setFol(1);
  };
  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
    setFol(1);
  };
  const postPas = () => {
    setInputValue2(inputValue);
    setInputValue3(inputValue1);
    setFol(4);
  };
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: `${inputValue2}`,
          password: `${inputValue3}`,
          //  login: "max",
          //  password: "6HrFrdc*#?rx!8x",
        }),
      };

      try {
        const response = await fetch("/api/admin", options);
        const data = await response.json();
        setFlutters(data);
      } catch (error) {
        console.log("Что-то пошло не так...", error);
      } finally {
        console.log("пошло так...");
      }
    };
    fetchData();
  }, [inputValue2, fol]);
  useEffect(() => {
    if (flutters.length === 1) {
      const fetchData = async () => {
        try {
          const response = await fetch(`api/or/adminOrder`);
          const data = await response.json();
          setFlutters1(data);
        } catch (error) {
          console.log("Что-то пошло не так...", error);
        } finally {
          console.log("пошло так...");
        }
      };
      fetchData();
    }
  }, [flutters]);
  console.log("inputValue2", flutters1);
  return (
    <div className={styles.box}>
      {flutters.length === 0 && (
        <div className={styles.box_input}>
          <input
            className={styles.input1}
            placeholder="логін"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <input
            className={styles.input2}
            placeholder="пароль"
            type="text"
            value={inputValue1}
            onChange={handleInputChange1}
          />
          <div
            className={styles.input_but}
            onClick={() => {
              postPas();
            }}
          >
            зайти
          </div>
          {fol === 4 && flutters.length === 0 && (
            <div>логін або пароль некоректний</div>
          )}
        </div>
      )}
      {flutters.length === 1 && <div>page</div>}
    </div>
  );
}
