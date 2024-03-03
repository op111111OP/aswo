"use client";
import { useEffect, useState } from "react";
// import Image from "next/image";
import styles from "./page.module.css";
import Swipe from "../components/Swiper/Swipe";
import SwipeNovelty from "../components/SwiperNovelty/SwiperNovelty";
import SwiperBrand from "../components/SwiperBrand/SwiperBrand";
import Basket from "../components/Basket/Basket";
import { FaShoppingCart } from "react-icons/fa";

export default function Home() {
  const [flutters, setFlutters] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/put/put`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            article: "DZ-6-2 88*56-1",
            com: "",
          }),
        });
        const data = await response.json();
        setFlutters(data);
      } catch (error) {
        console.log("Что-то пошло не так...", error);
      }
    };
    fetchData();
  }, []);
  console.log(flutters);
  const [cehageCor, setCehageCor] = useState(false);

  useEffect(() => {
    setCehageCor(false);
  }, []);

  function fals(t) {
    setCehageCor(t);
  }
  return (
    <main className={styles.main}>
      {cehageCor && <Basket fals={fals} />}

      {cehageCor && (
        <div
          className={styles.auto}
          onClick={() => {
            setCehageCor(false);
          }}
        ></div>
      )}
      <div className={styles.header_auto}>
        <FaShoppingCart
          size={25}
          className={styles.FaShoppingCart}
          onClick={() => {
            setCehageCor(true);
          }}
        />
      </div>
      <Swipe />
      <SwipeNovelty />
      <SwiperBrand />
    </main>
  );
}
