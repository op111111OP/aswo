"use client";
import styles from "./Menu2.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLocalStorage } from "react-use";
import { BsX } from "react-icons/bs";

export default function Menu2({
  cehage5,
  ss,
  //   flutters,

  //   num,
  //   menuFalse,
  i,
}) {
  //  -----------

  //  -----------

  //   menuFalse(fels);

  return (
    <div
      // className={`${styles.slide} ${cehage4 && styles.active}`}
      className={styles.container}
    >
      {/* -----------------2222222222222222222222 */}

      <div className={styles.component_mas850}>
        <BsX size={25} className={styles.x} onClick={() => ss(false)} />
        {cehage5 && (
          <div className={styles.component_mas850_text}>{cehage5.name}</div>
        )}
        {cehage5 &&
          cehage5.mas &&
          cehage5.mas.map((item, index) => (
            <Link
              href={`./categori?categori=${item.text}&false=1&currentPage1=a&i=${i}`}
              key={index}
              className={styles.component_mas_elem}
            >
              <div
                className={styles.component_mas_elem_text}
                onClick={() => {
                  ss(false);
                }}
              >
                {" "}
                {index + 1}.{item.text}.
              </div>
            </Link>
          ))}
      </div>

      {/* -----------------2222222222222222222222 */}
    </div>
  );
}
