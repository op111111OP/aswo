"use client";
import styles from "./Menu.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLocalStorage } from "react-use";

export default function Menu({
  flutters,
  onMouseEnter,
  onMouseLeave,
  num,
  menuFalse,
}) {
  const [onCategori, setOnCategori] = useLocalStorage("onCategori");
  const [fels, setFals] = useState(true);
  const userId = (newItem) => {
    if (newItem !== undefined && newItem !== "") {
      setOnCategori(newItem);
    }
  };
  menuFalse(fels);
  return (
    <div
      className={`${styles.container} ${styles[num]}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {flutters &&
        flutters.map((item, index) => (
          <div key={index} className={styles.component_box}>
            {(item.mas && (
              <div className={styles.component_name_box}>
                <Image src={item.img} alt={item.name} width={30} height={30} />
                <div className={styles.component_name}>{item.name}</div>
              </div>
            )) || (
              <div className={styles.component_name_box}>
                <Image src={item.img} alt={item.name} width={30} height={30} />
                <div className={styles.component_name}>{item.name}</div>
              </div>
            )}
            {flutters[index].mas && (
              <div className={styles.component_mas}>
                {flutters[index].mas.map((item, index) => (
                  <Link
                    href="/categori"
                    key={index}
                    className={styles.component_mas_elem}
                  >
                    <div
                      className={styles.component_mas_elem_text}
                      onClick={() => {
                        setFals();
                        userId(item.text);
                      }}
                    >
                      {" "}
                      {index + 1}.{item.text}.
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
