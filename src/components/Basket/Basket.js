"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Basket.module.css";
import { useLocalStorage } from "react-use";
import { BsTrash3 } from "react-icons/bs";
import { useUserContext } from "../../app/context/page";
import { BsArrowLeft } from "react-icons/bs";
import { BsX } from "react-icons/bs";

export default function Basket({ fals }) {
  const { senter, setOnCard } = useUserContext();
  const [onCard2, setOnCard2] = useLocalStorage("onCard2", []);
  const [valueButon, setValuebButon] = useState(1);
  const [total, setTotal] = useState(0);
  const [t, setT] = useState(true);

  fals(t);
  const handleRemoveItem = (m) => {
    setOnCard(m);
  };
  return (
    <div className={styles.main}>
      <BsX size={20} className={styles.x} onClick={() => setT((t) => !t)} />
      <div className={styles.main1}>
        <div className={styles.h1}>Кошик</div>
        <div className={styles.number_textN}>Назва</div>
        <div className={styles.number_textP}>Ціна</div>
        <div className={styles.number_text}>Кількість</div>
        <div className={styles.price_box_h1}>Вартість</div>
        {Array.isArray(senter) &&
          senter.map((item, index) => (
            <div className={styles.swiper_slide} key={index}>
              <div className={styles.image_box}>
                <Image
                  className={styles.img}
                  src={item.img}
                  alt="Vercel Logo"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 100vw"
                  width={35}
                  height={35}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className={styles.text}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.price}>{item.price} грн.</div>
              </div>
              <div className={styles.number_box}>
                <div className={styles.button_box}>
                  <div
                    className={styles.button1}
                    onClick={() =>
                      setValuebButon((prevValue) =>
                        prevValue == 1 ? prevValue : prevValue - 1
                      )
                    }
                  >
                    -
                  </div>
                  <div className={styles.button2}>{valueButon}</div>
                  <div
                    className={styles.button3}
                    onClick={() =>
                      setValuebButon((prevValue) =>
                        prevValue > 1000 ? prevValue : prevValue + 1
                      )
                    }
                  >
                    +
                  </div>
                </div>
              </div>
              <div className={styles.price_box}>
                <div className={styles.price_span}>
                  {item.price * valueButon} грн.
                </div>
              </div>
              <BsTrash3
                className={styles.dustbin}
                size={20}
                onClick={() => handleRemoveItem(item.name)}
              />
            </div>
          ))}
      </div>

      <div className={styles.issue_box}>
        <div className={styles.issue_come}>
          <BsArrowLeft className={styles.issue_} size={20} />
          <div className={styles.issue_} onClick={() => setT((t) => !t)}>
            {" "}
            Повернутись до покупок
          </div>
        </div>
        <div className={styles.issue_total}>
          <div className={styles.issue_price}>
            Всього:<span className={styles.issue_price_span}> 765 грн</span>
          </div>
          <div className={styles.issue_order}>Оформити замовлення</div>
        </div>
      </div>
    </div>
  );
}
