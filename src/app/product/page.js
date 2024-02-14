"use client";
import Image from "next/image";

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useUserContext } from "../Context/store";
import { BsArrowLeft } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Basket from "../../components/Basket/Basket";

export default function Page() {
  const { setOnCard1 } = useUserContext();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [flutters, setFlutters] = useState(null);
  const [flut, setFlut] = useState(null);
  const [truF, setTruF] = useState(true);
  const [name, setName] = useState("");
  const [cehageCor, setCehageCor] = useState(false);

  const handleBoxClick = () => {
    setCehageCor(false);
  };
  const handleBasketClick = (e, object) => {
    setOnCard1(object);
    setCehageCor(true);
    e.stopPropagation();
  };
  function fals(t) {
    setCehageCor(t);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // `/api/oneproduct/${id}`
          `/api/oneproduct/${id}`
        );
        const data = await response.json();
        setFlutters(data);
        setName(data.categori);
      } catch (error) {
        console.log("Что-то пошло не так...", error);
      } finally {
        console.log("пошло так...");
      }
    };
    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/oneproductrek/${name}`);
        const data = await response.json();
        setFlut(data);
      } catch (error) {
        console.log("Что-то пошло не так...", error);
      } finally {
        console.log("пошло так...");
      }
    };
    fetchData();
  }, [name]);
  //   console.log(flut);
  return (
    <div className={styles.main}>
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
        <div className={styles.right_g_box}>
          <div className={styles.right_goods_box} onClick={handleBoxClick}>
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
                <div className={styles.price_box} onClick={handleBoxClick}>
                  <div className={styles.price_box_pbox}>
                    <div className={styles.price}>{flutters.price} грн.</div>
                    <FaShoppingCart
                      size={25}
                      color=" #0058a2"
                      onClick={(e) => {
                        handleBasketClick(e, {
                          categori: flutters.categori,
                          brand: flutters.brand,
                          country: flutters.country,
                          description: flutters.description,
                          img: flutters.img,
                          name: flutters.name,
                          price: flutters.price,
                          id: flutters._id,
                        });
                      }}
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
          {/* //// */}
          <div className={styles.right_goods_box2}>
            {Array.isArray(flut) &&
              flut.map((item, index) => (
                <div className={styles.swiper_slide2} key={index}>
                  <div className={styles.slide_box2}>
                    <Link href={`./product?id=${item._id2}`}>
                      <div
                        className={styles.link_box2}
                        onClick={() => {
                          setId(item._id);
                        }}
                      >
                        <div className={styles.img_box2}>
                          <Image
                            className={styles.img2}
                            src={item.img}
                            alt="Vercel Logo"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 100vw"
                            width={30}
                            height={30}
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <div className={styles.text_box2}>{item.name}</div>
                      </div>
                    </Link>
                    <div className={styles.price_box2}>
                      {item.price === 0 && (
                        <div
                          className={styles.text_box_price2}
                          style={{ fontSize: "10px", width: "77px" }}
                        >
                          Зверніться до адміністратора.
                        </div>
                      )}
                      {item.price !== 0 && (
                        <div className={styles.text_box_price2}>
                          {item.price}грн
                        </div>
                      )}

                      <FaShoppingCart
                        size={25}
                        color=" #0058a2"
                        id="basket"
                        onClick={(e) => {
                          handleBasketClick(e, {
                            categori: item.categori,
                            brand: item.brand,
                            country: item.country,
                            description: item.description,
                            img: item.img,
                            name: item.name,
                            price: item.price,
                            id: item._id,
                          });
                        }}
                        className={styles.shopping2}
                      />
                    </div>

                    <div className={styles.text_botom_box2}>
                      <div>Бренд: {item.brand}</div>
                      <div> Країна виробництва: {item.country}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
