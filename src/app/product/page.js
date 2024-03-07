"use client";
import Image from "next/image";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./page.module.css";
import { useEffect, useState, useRef } from "react";
import { useUserContext } from "../Context/store";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Basket from "../../components/Basket/Basket";
import ImageZoom from "../../components/ImageZoom/ImageZoom";

export default function Page() {
  const { setOnCard1 } = useUserContext();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [flutters, setFlutters] = useState(null);
  const [flut, setFlut] = useState(null);

  const [name, setName] = useState("");
  const [cehageCor, setCehageCor] = useState(false);
  const [trueDes, setTrueDes] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [src, setSrc] = useState();
  // ----кнопка
  const contentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const contentBox = contentRef.current;
      if (contentBox && contentBox.scrollHeight > contentBox.clientHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    handleResize(); // Перевіряємо при першому рендері

    window.addEventListener("resize", handleResize); // Додаємо слухач події resize

    return () => {
      window.removeEventListener("resize", handleResize); // Прибираємо слухач події при видаленні компонента
    };
  }, []);

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
        const response = await fetch(`/api/oneproduct/${id}`);
        const data = await response.json();
        setFlutters(data);
        setName(data.categori);
        setSrc(data.img);
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

      {flutters && (
        <div className={styles.right_g_box}>
          <div className={styles.right_goods_box} onClick={handleBoxClick}>
            <div className={styles.name}>{flutters.name}</div>
            <div className={styles.slide_box}>
              <div className={styles.link_box}>
                <div className={styles.img_box}>
                  {/* zoom */}
                  <ImageZoom src={src} />
                </div>
                {/* zoom and*/}
                {/* опис */}

                <div className={styles.description_box}>
                  <div className={styles.description_h1}>Опис</div>
                  <div
                    className={
                      trueDes ? styles.description_full : styles.description
                    }
                    ref={contentRef}
                  >
                    {flutters.description}
                    <div
                      className={
                        showButton
                          ? styles.description_buton
                          : styles.description_buton_full
                      }
                      onClick={() => {
                        setTrueDes((trueDes) => !trueDes);
                      }}
                    >
                      {trueDes ? "Згорнути" : "Розгорнути"}
                    </div>
                  </div>
                </div>
              </div>
              {/* опис anf */}
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
                        com: flutters.com,
                        img: flutters.img,
                        name: flutters.name,
                        price: flutters.price,
                        id: flutters._id,
                        article: flutters.article,
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
                  <div className={styles.country_box}>
                    <div className={styles.country_h1}>Бренд: </div>
                    <div className={styles.country}>{flutters.brand}</div>
                  </div>
                  <div className={styles.country_box}>
                    <div className={styles.country_h1}>Артикул: </div>
                    <div className={styles.country}>{flutters.article}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //// */}
          <div className={styles.right_goods_box2}>
            {Array.isArray(flut) &&
              flut.map((item, index) => (
                <div
                  className={styles.swiper_slide2}
                  key={index}
                  id={`l${index}`}
                >
                  <div className={styles.slide_box2}>
                    <Link href={`./product?id=${item._id}`}>
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
                            com: item.com,
                            img: item.img,
                            name: item.name,
                            price: item.price,
                            id: item._id,
                            article: item.article,
                          });
                        }}
                        className={styles.shopping2}
                      />
                    </div>
                    <div className={styles.article}>
                      {" "}
                      <span className={styles.span}>Артикул:</span>
                      {item.article}
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
