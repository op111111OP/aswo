"use client";
import { useEffect, useState } from "react";
// import Image from "next/image";
import styles from "./page.module.css";
import Swipe from "../components/Swiper/Swipe";
import SwipeNovelty from "../components/SwiperNovelty/SwiperNovelty";
import SwiperBrand from "../components/SwiperBrand/SwiperBrand";
import Basket from "../components/Basket/Basket";

export default function Home() {
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
      <Swipe />
      <SwipeNovelty />
      <SwiperBrand />
    </main>
  );
}
