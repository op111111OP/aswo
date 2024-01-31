"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import Menu from "../Memu/Menu";
import { useEffect, useState } from "react";

export default function Header() {
  const [flutters, setFlutters] = useState(null);
  const [cehage, setCehage] = useState(false);

  const [idItem, setIdItem] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/find");
        const data = await response.json();
        setFlutters(data);
      } catch (error) {
        console.log("Что-то пошло не так...");
      } finally {
        console.log("пошло так...");
      }
    };
    fetchData();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header_container_one}>
        <div className={styles.header_one}>
          <a href="tel:0991703480" className={styles.box_telephone}>
            <BsTelephoneFill />
            <div className={styles.telephone}>+380 99 333 98 80</div>
          </a>
          <div className={styles.search_container}>
            <input
              className={styles.header_input}
              placeholder="Пошук"
              type="text"
            />
            <button className={styles.header_button}>
              <FaSearch />
            </button>
          </div>
          <div>
            <FaShoppingCart size={25} />
          </div>
        </div>
      </div>
      <div className={styles.header_container_two}>
        <div className={styles.header_two}>
          <Image
            src={
              "https://www.aswo.com/typo3conf/ext/aswo/Resources/Public/Images/header-logo.jpg"
            }
            width={150}
            height={47.63}
            alt="logo"
          />

          <div className={styles.catalogue_box}>
            <div
              className={styles.catalogue_elem}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[0].HoReCa);
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
            >
              HoReCa
            </div>
            <div
              className={styles.catalogue_elem}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[1].bigMachinery);
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
            >
              Велика техніка
            </div>
            <div
              className={styles.catalogue_elem}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[2].kukhonnaTekhnika);
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
            >
              Кухонна техніка{" "}
            </div>
            <div
              className={styles.catalogue_elem}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[3].equipmentBAHC);
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
            >
              Техніка для догляду за тілом та будинком
            </div>
            <div
              className={styles.catalogue_elem}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[4].climateTechno);
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
            >
              Кліматична техніка{" "}
            </div>
            <div
              className={styles.catalogue_elem}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[5].universalSPHAR);
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
            >
              Універсальні запчастини для ремонту побутової техніки
            </div>
            <div
              className={styles.catalogue_elem}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[6].sparePCRE);
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
            >
              Запчастини та комплектуючі до холодильного обладнання
            </div>
            {cehage && (
              <Menu
                onMouseEnter={() => {
                  setCehage(true);
                }}
                onMouseLeave={() => {
                  setCehage(false);
                }}
                flutters={idItem}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
