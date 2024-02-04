"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Page() {
  const [flutters, setFlutters] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/api/oneproduct/65b8d7d8a4679a9e1fd7baa5"
        );
        const data = await response.json();
        setFlutters(data);
      } catch (error) {
        console.log("Что-то пошло не так...", error);
      } finally {
        console.log("пошло так...");
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      {flutters && (
        <div className={styles.right_goods_box}>
          <div className={styles.slide_box}>
            <Link href="./">
              <div className={styles.link_box}>
                <div className={styles.img_box}>
                  <Image
                    className={styles.img}
                    src={flutters.img}
                    alt="Vercel Logo"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 100vw"
                    width={100}
                    height={100}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className={styles.text_box}>{flutters.name}</div>
              </div>
            </Link>
            <div className={styles.price_box}>
              <div className={styles.text_box_price}>{flutters.price}грн</div>
              <Link className={styles.shopping} href="./">
                <FaShoppingCart size={25} color=" #0058a2" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
