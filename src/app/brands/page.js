"use client";
// Import Swiper React components

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useUserContext } from "../Context/store";
import { useState } from "react";

export default function App() {
  const { setNemeB } = useUserContext();
  const brend = [
    {
      img: "https://doctor-h.com.ua/content/images/29/77x38l75nn0/81827292297291.webp",
      name: "aeg",
    },
    {
      img: "https://doctor-h.com.ua/content/images/35/77x38l75nn0/41958778882540.webp",
      name: "ardo",
    },
    {
      img: "https://doctor-h.com.ua/content/images/26/180x30l75nn0/92915233356651.webp",
      name: "ametek",
    },
    {
      img: "https://doctor-h.com.ua/content/images/4/180x79l75nn0/63441823479041.webp",
      name: "amica",
    },
    {
      img: "https://doctor-h.com.ua/content/images/2/77x38l75nn0/59361050882289.webp",
      name: "ariston",
    },
    {
      img: "https://doctor-h.com.ua/content/images/36/180x100l75nn0/39550902971057.webp",
      name: "askoll",
    },
    {
      img: "https://doctor-h.com.ua/content/images/34/180x100l75nn0/90360451058740.webp",
      name: "atlantic",
    },
    {
      img: "https://doctor-h.com.ua/content/images/32/180x68l75nn0/28191980357954.webp",
      name: "beslux",
    },
    {
      img: "https://doctor-h.com.ua/content/images/38/77x38l75nn0/53680195548105.webp",
      name: "braun",
    },
    {
      img: "https://doctor-h.com.ua/content/images/17/180x44l75nn0/89967959610766.webp",
      name: "bauknecht",
    },
    {
      img: "https://doctor-h.com.ua/content/images/13/120x120l75nn0/34769762562324.webp",
      name: "beko",
    },
    {
      img: "https://doctor-h.com.ua/content/images/4/180x76l75nn0/24839862291238.webp",
      name: "bosch",
    },
    {
      img: "https://doctor-h.com.ua/content/images/41/180x101l75nn0/33948258239328.webp",
      name: "candy",
    },
    {
      img: "https://doctor-h.com.ua/content/images/34/180x54l75nn0/30449079637884.webp",
      name: "copreci",
    },
    {
      img: "https://doctor-h.com.ua/content/images/45/180x74l75nn0/35735801480381.webp",
      name: "danfoss",
    },
    {
      img: "https://doctor-h.com.ua/content/images/24/180x101l75nn0/60009054446197.webp",
      name: "delonghi",
    },
    {
      img: "https://doctor-h.com.ua/content/images/25/180x59l75nn0/15266602545750.webp",
      name: "domel",
    },
    {
      img: "https://doctor-h.com.ua/content/images/6/180x100l75nn0/38958517653152.webp",
      name: "ebi",
    },
    {
      img: "https://doctor-h.com.ua/content/images/37/180x53l75nn0/43678905340351.webp",
      name: "ego",
    },
    {
      img: "https://doctor-h.com.ua/content/images/47/180x101l75nn0/61517748182532.webp",
      name: "electrolux",
    },
    {
      img: "https://doctor-h.com.ua/content/images/40/180x90l75nn0/76978110538828.webp",
      name: "ferroli",
    },
    {
      img: "https://doctor-h.com.ua/content/images/50/180x45l75nn0/18845105715702.webp",
      name: "gefest",
    },
    {
      img: "https://doctor-h.com.ua/content/images/1/180x85l75nn0/72888080487853.webp",
      name: "gorenje",
    },
    {
      img: "https://doctor-h.com.ua/content/images/19/180x56l75nn0/23208356638932.webp",
      name: "haier",
    },
  ];
  return (
    <div className={styles.right_goods_box}>
      {brend.map((item, index) => (
        <div className={styles.swiper_slide} key={index}>
          <div className={styles.slide_box}>
            <Link href={`/search?search=${item.name}`}>
              <div className={styles.link_box}>
                <div className={styles.img_box}>
                  <Image
                    className={styles.img}
                    src={item.img}
                    alt="Vercel Logo"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 100vw"
                    width={100}
                    height={100}
                    style={{
                      height: "auto",
                      width: "120px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className={styles.text_box}>{item.name}</div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
