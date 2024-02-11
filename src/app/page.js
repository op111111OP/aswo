"use client";
// import Image from "next/image";
import styles from "./page.module.css";
import Swipe from "../components/Swiper/Swipe";
import SwipeNovelty from "../components/SwiperNovelty/SwiperNovelty";
import SwiperBrand from "../components/SwiperBrand/SwiperBrand";
// import { useEffect, useState } from "react";

export default function Home() {

  return (
    <main className={styles.main}>
      <Swipe />
      <SwipeNovelty />
      <SwiperBrand />
    </main>
  );
}
