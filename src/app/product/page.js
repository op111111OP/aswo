"use client";
import Image from "next/image";

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useUserContext } from "../Context/store";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const { setUserId } = useUserContext();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [flutters, setFlutters] = useState(null);
  const [truF, setTruF] = useState(true);
  //   const [idp, seIdp] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // `/api/oneproduct/${id}`
          `/api/oneproduct/${id}`
        );
        const data = await response.json();
        setFlutters(data);
        console.log(data, "pp");
      } catch (error) {
        console.log("Что-то пошло не так...", error);
      } finally {
        console.log("пошло так...");
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className={styles.main}>
      {!truF && (
        <BsArrowLeft
          className={styles.dustbinI}
          size={40}
          onClick={() => {
            setTruF(true);
          }}
        />
      )}
      {flutters && (
        <div className={styles.right_goods_box}>
          {truF && <div className={styles.name}>{flutters.name}</div>}
          <div className={styles.slide_box}>
            <div className={styles.link_box}>
              <div className={truF ? styles.img_box : styles.img_box_fals}>
                <Image
                  src={flutters.img}
                  alt="Vercel Logo"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 100vw"
                  className={styles.img}
                  width={100}
                  height={100}
                  style={
                    truF
                      ? { height: "50vh", width: "70%", objectFit: "contain" }
                      : {
                          height: "400px",
                          width: "50vw",
                          objectFit: "contain",
                        }
                  }
                  onClick={() => {
                    setTruF((truF) => !truF);
                  }}
                />
              </div>
              {truF && (
                <div className={styles.description_box}>
                  <div className={styles.description_h1}>Опис</div>
                  <div className={styles.description}>
                    {flutters.description}
                  </div>
                </div>
              )}
            </div>

            {truF && (
              <div className={styles.price_box}>
                <div className={styles.price_box_pbox}>
                  <div className={styles.price}>{flutters.price} грн.</div>
                  <FaShoppingCart
                    size={25}
                    color=" #0058a2"
                    onClick={() =>
                      setUserId({
                        categori: flutters.categori,
                        brand: flutters.brand,
                        country: flutters.country,
                        description: flutters.description,
                        img: flutters.img,
                        name: flutters.name,
                        price: flutters.price,
                        id: flutters._id,
                      })
                    }
                    className={styles.shopping}
                  />
                </div>
                <div className={styles.characteristics_box}>
                  <div className={styles.characteristics_h1}>
                    Характеристики
                  </div>
                  <div className={styles.country_box}>
                    <div className={styles.country_h1}>
                      Країна виробництва:{" "}
                    </div>
                    <div className={styles.country}>{flutters.country}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
