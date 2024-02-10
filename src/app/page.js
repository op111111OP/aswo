"use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
import styles from "./page.module.css";
import Swipe from "../components/Swiper/Swipe";
import SwipeNovelty from "../components/SwiperNovelty/SwiperNovelty";
import SwiperBrand from "../components/SwiperBrand/SwiperBrand";

export default function Home() {
  return (
    <main className={styles.main}>
      <Swipe />
      <SwipeNovelty />
      <SwiperBrand />
    </main>
  );
}
