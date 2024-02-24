"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { BsTelephoneFill, BsX } from "react-icons/bs";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import Menu from "../Memu/Menu";
import Menu2 from "../Memu2/Menu2";
import { useEffect, useState } from "react";
import Link from "next/link";
import AutoComplit from "../AutoComplit/AutoComplit";
import { FiAlignJustify } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";

export default function Header() {
  const [flutters, setFlutters] = useState(null);
  const [cehage, setCehage] = useState(false);
  const [cehage1, setCehage1] = useState(false);
  const [cehage4, setCehage4] = useState(false);
  const [cehage5, setCehage5] = useState([]);
  const [num, setNum] = useState();
  const [idItem, setIdItem] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [t, setT] = useState(false);
  const [i, seti] = useState(false);
  const [i1, seti1] = useState(false);
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
          <div>
            {/* <FaShoppingCart size={25} className={styles.FaShoppingCart} /> */}
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
          {/* ///////////////////////////////////111 */}
          <FiAlignJustify
            size={25}
            className={styles.FiAlignJustify}
            onClick={() => setT(true)}
          />

          <div className={styles.catalogue_box}>
            <div
              className={styles.catalogue_elem}
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
              className={styles.catalogue_elem}
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
              className={styles.catalogue_elem}
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
              className={styles.catalogue_elem}
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
              className={styles.catalogue_elem}
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
              className={styles.catalogue_elem}
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
              className={styles.catalogue_elem}
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
              />
            )}
          </div>
          {/* //////////////////////////////222 */}
          {t && (
            <div className={styles.catalogue_box2}>
              {t && (
                <div
                  className={styles.auto}
                  onClick={() => {
                    setT(false);
                    setCehage(false);
                  }}
                ></div>
              )}
              <BsX size={20} className={styles.x} onClick={() => setT(false)} />
              <div
                className={styles.catalogue_elem2}
                onClick={() => {
                  setCehage(true);
                  setIdItem(flutters[0].u);
                  setNum("o2");
                }}
              >
                HoReCa{" "}
                <BsChevronRight size={15} className={styles.BsChevronRight} />
              </div>
              <div
                className={styles.catalogue_elem2}
                onClick={() => {
                  setCehage(true);
                  setIdItem(flutters[1].u);
                  seti(flutters[1]._id);

                  setNum("o2");
                }}
              >
                Велика техніка
                <BsChevronRight size={15} className={styles.BsChevronRight} />
              </div>
              <div
                className={styles.catalogue_elem2}
                onClick={() => {
                  setCehage(true);
                  setIdItem(flutters[2].u);
                  seti(flutters[2]._id);

                  setNum("o2");
                }}
              >
                Кухонна техніка
                <BsChevronRight size={15} className={styles.BsChevronRight} />
              </div>
              <div
                className={styles.catalogue_elem2}
                onClick={() => {
                  setCehage(true);
                  setIdItem(flutters[3].u);
                  seti(flutters[3]._id);

                  setNum("o2");
                }}
              >
                Техніка для догляду за тілом та будинком
                <BsChevronRight size={15} className={styles.BsChevronRight} />
              </div>
              <div
                className={styles.catalogue_elem2}
                onClick={() => {
                  setCehage(true);
                  setIdItem(flutters[4].u);
                  seti(flutters[4]._id);

                  setNum("o2");
                }}
              >
                Кліматична техніка
                <BsChevronRight size={15} className={styles.BsChevronRight} />
              </div>
              <div
                className={styles.catalogue_elem2}
                onClick={() => {
                  setCehage(true);
                  setIdItem(flutters[5].u);
                  seti(flutters[5]._id);

                  setNum("o2");
                }}
              >
                Універсальні запчастини для ремонту побутової техніки
                <BsChevronRight size={15} className={styles.BsChevronRight} />
              </div>
              <div
                className={styles.catalogue_elem2}
                onClick={() => {
                  setCehage(true);
                  setIdItem(flutters[6].u);
                  setNum("o2");
                }}
              >
                Запчастини та комплектуючі до холодильного обладнання
                <BsChevronRight scale={15} className={styles.BsChevronRight} />
              </div>

              {cehage && (
                <Menu
                  flutters={idItem}
                  num={num}
                  menuFalse={menuFalse}
                  i={i}
                  s={(a) => {
                    setCehage1(a);
                  }}
                  handleResize1={(a) => {
                    setCehage5(a);
                  }}
                />
              )}
              {cehage1 && (
                <Menu2
                  //   flutters={idItem}
                  //   num={num}
                  //   menuFalse={menuFalse}
                  i={i}
                  ss={(a) => {
                    setCehage1(a);
                  }}
                  cehage5={cehage5}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
