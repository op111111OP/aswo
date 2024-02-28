"use client";
// Import Swiper React components

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.box_}>
      <h2 className={styles.box_h2}>
        {" "}
        📦 Оплата і доставка запчастин для битової техніки в Україні
      </h2>
      <h3 className={styles.box}>Нова поштаю</h3>
      <h4 className={styles.box}>«Нова пошта» на відділення по Україні</h4>
      <h4 className={styles.box}>Відправлення замовлення протягом 1-3 днів</h4>
      <div className={styles.box_p}>
        ** Увага! Вартість переказу післяплати Нової пошти становить 20 грн + 2%
        від суми замовлення.
      </div>

      <h4 className={styles.box}>«Нова пошта» до поштомату по Україні:</h4>
      <div className={styles.box_p}>
        при замовленні на суму від 3000 грн — БЕЗКОШТОВНО
      </div>
      <div className={styles.box_p}>
        при замовленні на суму до 299 грн — 70 грн
      </div>
      <div className={styles.box_p}>
        * Відправлення замовлення протягом 1-3 днів
      </div>
      <div className={styles.box_p}>
        ** При виникненні складнощів при доставці замовлення, за невірно
        заповнені дані, інтернет-магазин чи служба доставки відповідальності не
        несуть
      </div>
      <h4 className={styles.box}>
        💰 Чиїм коштом відбувається обмін чи повернення запчастини?
      </h4>
      <div className={styles.box_p}>
        Повернення запчастини відбувається нашим коштом у разі, якщо товар був
        підібраний неправильно менеджером магазину. У випадках, коли клієнт не
        правильно підібрав запчастину сам чи з інших причин – повернення
        відбувається коштом клієнта.
      </div>
      <h4 className={styles.box}>
        Адресна доставка кур`єром «Нова пошта» по Україні
      </h4>
      <h3 className={styles.box}>Умови.</h3>
      <h4 className={styles.box}>Умови оформлення доставки:</h4>
      <div className={styles.box_p}>
        Доставка день в день (за умови оформлення замовлення до 12:00)
      </div>
      <div className={styles.box_p}>
        * За умови наявності товару на магазині
      </div>
      <h4 className={styles.box}>Максимальні габарити для доставки:</h4>
      <h3 className={styles.box}>Оплата замовлення.</h3>

      <div className={styles.boxn}>
        <img
          src="https://masterzoo.ua/content/uploads/images/pages/visamc.png"
          alt="visa"
        />
        <h4 className={styles.box}>Онлайн оплата картою Visa або Mastercard</h4>
      </div>
      <div className={styles.boxn}>
        <img
          src="https://masterzoo.ua/content/uploads/images/pages/oplata.png"
          alt="visa"
        />
        <h4 className={styles.box}>Оплата при отриманні</h4>
      </div>
    </div>
  );
}
