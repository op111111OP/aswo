"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Basket.module.css";
import { useLocalStorage } from "react-use";
import { BsTrash3 } from "react-icons/bs";

export default function Basket({ fals, onCard, updated }) {
  const [valueButon, setValuebButon] = useState(1);
  const [OnCardUpdated, setOnCard] = useState();
  const [total, setTotal] = useState(0);
  const [t, setT] = useState(true);
  const handleRemoveItem = (indexToRemove) => {
    const updatedItems = onCard.filter(
      (item, index) => index !== indexToRemove
    );
    setOnCard(updatedItems);
  };

  updated(OnCardUpdated);
  fals(t);
  useEffect(() => {
    setOnCard(onCard);
  }, []);
  //   console.log(onCard);
  return (
    <div className={styles.main}>
      <div className={styles.h1}>Кошик</div>
      <div className={styles.main1}>
        <div className={styles.number_textN}>Назва</div>
        <div className={styles.number_textP}>Ціна</div>
        <div className={styles.number_text}>Кількість</div>
        <div className={styles.price_box_h1}>Вартість</div>
        {Array.isArray(OnCardUpdated) &&
          OnCardUpdated.map((item, index) => (
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
                <div className={styles.name} onClick={() => setT((t) => !t)}>
                  {item.name}
                </div>
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
                onClick={() => handleRemoveItem(index)}
              />
            </div>
          ))}
      </div>

      <div className={styles.issue_box}>
        <div className={styles.issue_come}>
          <div className={styles.issue_}></div>
          <div className={styles.issue_}> Повернутись до покупок</div>
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
