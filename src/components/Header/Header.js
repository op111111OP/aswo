"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import Menu from "../Memu/Menu";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [flutters, setFlutters] = useState(null);
  const [cehage, setCehage] = useState(false);
  const [num, setNum] = useState();
  const [idItem, setIdItem] = useState(false);

  function menuFalse(fals) {
    setCehage(fals);
  }
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
          <div className={styles.search_container}>
            <input
              className={styles.header_input}
              placeholder="Пошук"
              type="text"
            />
            <button className={styles.header_button}>
              <FaSearch className={styles.FaSearch} />
            </button>
          </div>
          <div>
            <FaShoppingCart size={25} className={styles.FaShoppingCart} />
          </div>
        </div>
      </div>
      <div className={styles.header_container_two}>
        <div className={styles.header_two}>
          <Link href="./">
            <Image
              src={
                "https://www.aswo.com/typo3conf/ext/aswo/Resources/Public/Images/header-logo.jpg"
              }
              width={150}
              height={47.63}
              alt="logo"
            />
          </Link>

          <div className={styles.catalogue_box}>
            <div
              className={styles.catalogue_elem}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[0].HoReCa);
                setNum("a");
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
                setNum("b");
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
                setNum("c");
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
                setNum("d");
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
                setNum("f");
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
                setNum("g");
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
                setNum("o");
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
                num={num}
                menuFalse={menuFalse}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
