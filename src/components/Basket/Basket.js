"use client";

import Image from "next/image";
import { useState } from "react";

export default function Basket() {
  const [valueButon, setValuebButon] = useState(1);

  return (
    <div className={styles.main}>
      <div className={styles.h1}>Кошик</div>
      <div className={styles.main1}>
        <div className={styles.image_box}>
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
        <div className={styles.text}>
          <div className={styles.name}>
            Панель гаряча (верхня) для електрогриля Tefal (TS-01039391)
          </div>
          <div className={styles.price}>765 грн</div>
        </div>
        <div className={styles.number_box}>
          <div className={styles.number_text}>Кількість</div>
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
                  prevValue > 19 ? prevValue : prevValue + 1
                )
              }
            >
              +
            </div>
          </div>
        </div>
        <div className={styles.price_box}>
          <div className={styles.price_box.h1}>Вартість</div>
          <div className={styles.price_span}>
            {flutters[0].price * valueButon}
          </div>
          грн.
        </div>
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
