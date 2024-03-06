"use client";
import styles from "./Menu.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { BsX } from "react-icons/bs";

export default function Menu({
  flutters,
  onMouseEnter,
  onMouseLeave,
  num,
  menuFalse,
  handleResize1,
  cehage,
  s,
  i,
}) {
  const [fels, setFals] = useState(true);

  //  -----------

  //  -----------

  menuFalse(fels);

  return (
    <div
      className={`${styles.container} ${styles[num]} ${
        cehage && styles.catalogue_box2anim
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <BsX size={25} className={styles.x} onClick={() => setFals(false)} />
      {flutters &&
        flutters.map((item, index) => (
          <div key={index} className={styles.component_box}>
            {(item.mas && (
              <div className={styles.component_name_box}>
                <Image src={item.img} alt={item.name} width={30} height={30} />
                <div
                  className={styles.component_name}
                  onClick={() => {
                    handleResize1(item);

                    s(true);
                  }}
                >
                  {item.name}
                </div>
              </div>
            )) || (
              <Link
                href={`./categori?categori=${item.name}&false=2&currentPage1=1`}
              >
                <div
                  className={`${styles.component_name_box} ${styles.component_name_b}`}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                  <div
                    className={styles.component_name}
                    onClick={() => {
                      setFals(false);
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              </Link>
            )}
            {flutters[index].mas && (
              <div className={styles.component_mas}>
                {flutters[index].mas.map((item, index) => (
                  <Link
                    href={`./categori?categori=${item.text}&false=1&currentPage1=a&i=${i}`}
                    key={index}
                    className={styles.component_mas_elem}
                  >
                    <div
                      className={styles.component_mas_elem_text}
                      onClick={() => {
                        setFals(false);
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
