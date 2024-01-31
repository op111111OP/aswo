import styles from "./Footer.module.css";

import { BsTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_box}>
        <BsTelephoneFill /> 0000000000000000000
      </div>
    </footer>
  );
}
