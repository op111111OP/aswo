"use client";
import styles from "./Menu.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSessionStorage } from "react-use";
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
  vv,
  x,
}) {
  //   const [activeId, setActiveId] = useSessionStorage("activeId", null);
  //   const [activeId, setActiveId] = useState(null);
  const [fels, setFals] = useState(true);
  const [num1, setNum1] = useState(num);

  //   clik
  useEffect(() => {
    setNum1(num);
  }, []);

  const handleClick = (a) => {
    vv(num1, a);
    setFals(false);
  };
  menuFalse(fels);
  //   clik and
  //  -----------

  //  -----------

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
                      handleClick(item.name);
                    }}
                    style={{
                      color: x === item.name ? "blue" : "black",
                      textDecoration: x === item.name ? "underline" : "none",
                      cursor: "pointer",
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
                        handleClick(item.text);
                      }}
                      style={{
                        color: x === item.text ? "blue" : "black",
                        textDecoration: x === item.text ? "underline" : "none",
                        cursor: "pointer",
                      }}
                    >
                      <div id="1"></div> {index + 1}.{item.text}.
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
