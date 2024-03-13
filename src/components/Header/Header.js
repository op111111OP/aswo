"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { BsTelephoneFill, BsX } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Menu from "../Memu/Menu";
import Menu2 from "../Memu2/Menu2";
import { useEffect, useState } from "react";
import Link from "next/link";
import AutoComplit from "../AutoComplit/AutoComplit";
import { FiAlignJustify } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import { useSearchParams } from "next/navigation";

export default function Header() {
  const searchParams = useSearchParams();
  const onCategori = searchParams.get("categori");

  const [flutters, setFlutters] = useState(null);
  const [cehage, setCehage] = useState(false);
  const [cehage1, setCehage1] = useState(false);

  const [cehage5, setCehage5] = useState([]);
  const [num, setNum] = useState();
  const [num1, setNum1] = useState();

  const [idItem, setIdItem] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [t, setT] = useState(false);
  const [i, seti] = useState(false);
  const [v, setV] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 850) {
        setT(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  function menuFalse(fals) {
    setCehage(fals);
    setT(fals);
  }
  function vv(c) {
    setV(c);

    setCehage(false);
    setT(false);
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
      {inputValue && (
        <div
          className={styles.auto}
          onClick={() => {
            setInputValue("");
          }}
        ></div>
      )}
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
            <Link href={`/search?search=${inputValue}`}>
              <button
                className={styles.header_button}
                onClick={() => {
                  setInputValue("");
                }}
              >
                <FaSearch className={styles.FaSearch} />
              </button>
            </Link>
            <input
              className={styles.header_input}
              placeholder="Пошук"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            {inputValue && <AutoComplit value={inputValue} />}
          </div>
          <div></div>
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
          {/* ///////////////////////////////////111 */}
          {/* ікон меню */}
          <FiAlignJustify
            size={28}
            className={styles.FiAlignJustify}
            onClick={() => {
              setT(true);
            }}
          />
          {/* меню велике */}
          <div className={styles.catalogue_box}>
            <div
              className={`${styles.catalogue_elem} ${
                v === "a" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[0].u);

                setNum("a");
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[0].u);

                setNum("a");
              }}
            >
              HoReCa
            </div>
            <div
              className={`${styles.catalogue_elem} ${
                v === "b" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[1].u);
                seti(flutters[1]._id);

                setNum("b");
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[1].u);
                seti(flutters[1]._id);

                setNum("b");
              }}
            >
              Велика техніка
            </div>
            <div
              className={`${styles.catalogue_elem} ${
                v === "c" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[2].u);
                seti(flutters[2]._id);

                setNum("c");
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[2].u);
                seti(flutters[2]._id);

                setNum("c");
              }}
            >
              Кухонна техніка{" "}
            </div>
            <div
              className={`${styles.catalogue_elem} ${
                v === "d" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[3].u);
                seti(flutters[3]._id);

                setNum("d");
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[3].u);
                seti(flutters[3]._id);

                setNum("d");
              }}
            >
              Техніка для догляду за тілом та будинком
            </div>
            <div
              className={`${styles.catalogue_elem} ${
                v === "f" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[4].u);
                seti(flutters[4]._id);

                setNum("f");
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[4].u);
                seti(flutters[4]._id);

                setNum("f");
              }}
            >
              Кліматична техніка{" "}
            </div>
            <div
              className={`${styles.catalogue_elem} ${
                v === "g" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[5].u);
                seti(flutters[5]._id);

                setNum("g");
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[5].u);
                seti(flutters[5]._id);

                setNum("g");
              }}
            >
              Універсальні запчастини для ремонту побутової техніки
            </div>
            <div
              className={`${styles.catalogue_elem} ${
                v === "o" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onMouseEnter={() => {
                setCehage(true);
                setIdItem(flutters[6].u);

                setNum("o");
              }}
              onMouseOut={() => {
                setCehage(false);
              }}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[6].u);

                setNum("o");
              }}
            >
              Запчастини та комплектуючі до холодильного обладнання
            </div>
            {/* меню велике and*/}
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
                i={i}
                vv={vv}
                x={onCategori}
              />
            )}
          </div>
          {/* //////////////////////////////222 {/* меню мале*/}

          <div
            className={`${styles.catalogue_box2} ${
              t && styles.catalogue_box2anim
            }`}
          >
            {t && (
              <div
                className={styles.auto}
                onClick={() => {
                  setT(false);
                  setCehage(false);
                  setCehage1(false);
                }}
              ></div>
            )}
            <BsX size={20} className={styles.x} onClick={() => setT(false)} />
            <div
              className={`${styles.catalogue_elem2} ${
                v === "a" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[0].u);
                setNum("o2");
                setV("a");
                setNum1("a");
              }}
            >
              HoReCa{" "}
              <BsChevronRight size={15} className={styles.BsChevronRight} />
            </div>
            <div
              className={`${styles.catalogue_elem2} ${
                v === "b" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[1].u);
                seti(flutters[1]._id);

                setNum("o2");
                setV("b");
                setNum1("b");
              }}
            >
              Велика техніка
              <BsChevronRight size={15} className={styles.BsChevronRight} />
            </div>
            <div
              className={`${styles.catalogue_elem2} ${
                v === "c" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[2].u);
                seti(flutters[2]._id);

                setNum("o2");
                setV("c");
                setNum1("c");
              }}
            >
              Кухонна техніка
              <BsChevronRight size={15} className={styles.BsChevronRight} />
            </div>
            <div
              className={`${styles.catalogue_elem2} ${
                v === "d" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[3].u);
                seti(flutters[3]._id);

                setNum("o2");
                setV("d");
                setNum1("d");
              }}
            >
              Техніка для догляду за тілом та будинком
              <BsChevronRight size={15} className={styles.BsChevronRight} />
            </div>
            <div
              className={`${styles.catalogue_elem2} ${
                v === "f" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[4].u);
                seti(flutters[4]._id);

                setNum("o2");
                setV("f");
                setNum1("f");
              }}
            >
              Кліматична техніка
              <BsChevronRight size={15} className={styles.BsChevronRight} />
            </div>
            <div
              className={`${styles.catalogue_elem2} ${
                v === "g" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[5].u);
                seti(flutters[5]._id);

                setNum("o2");
                setV("g");
                setNum1("g");
              }}
            >
              Універсальні запчастини для ремонту побутової техніки
              <BsChevronRight size={15} className={styles.BsChevronRight} />
            </div>
            <div
              className={`${styles.catalogue_elem2} ${
                v === "o" ? styles.catalogue_elem_clisk : styles.xxxc
              }`}
              onClick={() => {
                setCehage(true);
                setIdItem(flutters[6].u);
                setNum("o2");

                setNum1("o");
              }}
            >
              Запчастини та комплектуючі до холодильного обладнання
              <BsChevronRight scale={15} className={styles.BsChevronRight} />
            </div>
            {/* меню мале and*/}
            {cehage && (
              <Menu
                flutters={idItem}
                num={num}
                num1={num1}
                menuFalse={menuFalse}
                i={i}
                s={(a) => {
                  setCehage1(a);
                }}
                handleResize1={(a) => {
                  setCehage5(a);
                }}
                vv={vv}
                cehage={cehage}
                x={onCategori}
              />
            )}
            {cehage1 && (
              <Menu2
                i={i}
                ss={(a) => {
                  setCehage1(a);
                  setCehage(a);
                  setT(a);
                }}
                cehage5={cehage5}
                x={onCategori}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
