import styles from "./Footer.module.css";

import { BsTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.box_telephone_box}>
          <a href="tel:0666528759" className={styles.box_telephone}>
            <BsTelephoneFill />
            <div className={styles.telephone}>+380 066 65 28 759</div>
          </a>
          <a href="tel:0800800112" className={styles.box_telephone}>
            <BsTelephoneFill />
            <div className={styles.telephone}>0800 800 112</div>
          </a>
        </div>
      </div>
    </footer>
  );
}
