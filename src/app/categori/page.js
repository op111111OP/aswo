"use client";
import Slider from "rc-slider";
import styles from "./page.module.css";
import { BsCardList } from "react-icons/bs";
import { HiSquares2X2 } from "react-icons/hi2";
import { useEffect, useState } from "react";
import "rc-slider/assets/index.css";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Basket from "../../components/Basket/Basket";
import { useLocalStorage } from "react-use";
import { useUserContext } from "../Context/store";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const { setId, seOnIds, numB22 } = useUserContext();
  const [resCategori, setResCategori] = useLocalStorage("resCategori", []);
  const [aa1, setAa1] = useLocalStorage("resAa1111", []);
  const searchParams = useSearchParams();
  const onCategori = searchParams.get("categori");
  const falsepon = searchParams.get("false");
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [flutters, setFlutters] = useState([]);
  const [cehage, setCehage] = useState(false);
  const [cehageCor, setCehageCor] = useState(false);
  const [IdCategori, setIdCategori] = useState([]);
  const [name, setName] = useState("");
  const [n, setN] = useState([]);
  const [num1, setNum1] = useState(1);
  const [nIFalsum, setIFals] = useState(true);

  const num2 = 1;
  const sortByValueAscending = () => {
    const sortedArray = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sortedArray);
  };

  const sortByValueDescending = () => {
    const sortedArray = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sortedArray);
  };
  useEffect(() => {
    setAa1(n);
  }, [n]);

  useEffect(() => {
    if (numB22.length !== aa1.length) {
      setAa1(numB22);
    }
  }, [numB22]);
  const addToArray = (newItem) => {
    setN((prevOnCard) => {
      const existingIndex = prevOnCard.findIndex(
        (obj) => obj.name === newItem.name
      );
      if (existingIndex === -1) {
        return [...prevOnCard, newItem];
      } else {
        return prevOnCard;
      }
    });
  };
  useEffect(() => {
    setN(aa1);
  }, []);
  useEffect(() => {
    if (num1 > num2) {
      setIdCategori(IdCategori);
    }

    setName(num1 > num2 ? IdCategori : onCategori);
  }, [num1, num2]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/categori/${name}`);
        const data = await response.json();
        setFlutters(data);
        setFilteredProducts(data);
      } catch (error) {
        console.log("Что-то пошло не так...", error);
      } finally {
        console.log("пошло так...");
      }
    };
    fetchData();
  }, [name]);

  //   bbbbbbbbbbbbbbbbb
  const handleSliderChange = (value) => {
    setPriceRange(value);
    const filtered = flutters.filter(
      (product) => product.price >= value[0] && product.price <= value[1]
    );
    setFilteredProducts(filtered);
  };

  const handleBoxClick = () => {
    // Ваша логика обработки клика на боксе
    console.log("Clicked on the box");
    // Скрыть корзину при клике на боксе
    setCehageCor(false);
  };

  const handleBasketClick = (e, object) => {
    // Ваша логика обработки клика на корзине
    addToArray(object);

    setCehageCor(true);
    // Остановить всплытие события, чтобы не срабатывал клик на боксе
    e.stopPropagation();
  };
  function fals(t) {
    setCehageCor(t);
  }

  return (
    <div className={styles.main}>
      {cehageCor && <Basket fals={fals} />}
      <div className={styles.main_h1_box} id="myBox" onClick={handleBoxClick}>
        <div className={styles.main_h1}>
          {num1 > num2 ? IdCategori : onCategori}
        </div>
        <div className={styles.main_h2}>
          <div className={styles.main_sort}>Сортування:</div>
          <div className={styles.main_p_box}>
            <div className={styles.main_p1} onClick={sortByValueAscending}>
              спочатку дешевше
            </div>
            <div className={styles.main_p2} onClick={sortByValueDescending}>
              спочатку дорожчі
            </div>
          </div>
          <div className={styles.reflection_box}>
            <div className={styles.reflection}>Відображення:</div>
            <div className={styles.reflection_icon}>
              <BsCardList
                className={styles.reflection_icon1}
                size={25}
                onClick={() => {
                  setIFals(true);
                }}
              />
              <HiSquares2X2
                className={styles.reflection_icon2}
                size={25}
                onClick={() => {
                  setIFals(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box} id="myBox" onClick={handleBoxClick}>
        <div className={styles.box_left}>
          <div className={styles.box_slider}>
            <div className={styles.price_box_cl}>
              <div className={styles.price_min}>{priceRange[0]}</div>
              <div className={styles.price_max}>{priceRange[1]}</div>
            </div>
            <div className={styles.slider}>
              <Slider
                range
                min={0}
                max={20000}
                step={1}
                value={priceRange}
                onChange={handleSliderChange}
                className={styles.slider_el}
              />
            </div>
          </div>
          {falsepon === "1" && (
            <div className={styles.categori_box_left}>
              {Array.isArray(resCategori.mas) &&
                resCategori.mas.map((item, index) => (
                  <div
                    className={styles.categori_box_left_elem}
                    key={index}
                    onClick={() => {
                      setNum1(num1 + 1);
                      setIdCategori(item.text);
                    }}
                  >
                    <div className={styles.categori_left_elem}>
                      {index + 1}. {item.text}.
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className={styles.box_right}>
          {nIFalsum && (
            <div className={styles.right_h1}>
              <div className={styles.right_h2}>Назва</div>
              <div className={styles.right_hh}>
                <div className={styles.right_h2}>Ціна</div>
                <div className={styles.right_h2}>Замовлення</div>
              </div>
            </div>
          )}
          <div
            className={
              nIFalsum === false
                ? styles.right_goods_box
                : styles.right_goods_box1
            }
          >
            {Array.isArray(filteredProducts) &&
              filteredProducts.map((item, index) => (
                <div
                  className={
                    nIFalsum === false
                      ? styles.swiper_slide
                      : styles.swiper_slide1
                  }
                  key={index}
                  onMouseEnter={() => {
                    setCehage(index);
                  }}
                  onMouseLeave={() => {
                    setCehage(false);
                  }}
                >
                  <div
                    className={
                      nIFalsum === false ? styles.slide_box : styles.slide_box1
                    }
                  >
                    <Link href={`./product?id=${item._id}`}>
                      <div
                        className={
                          nIFalsum === false
                            ? styles.link_box
                            : styles.link_box1
                        }
                        onClick={() => {
                          setId(item._id);
                        }}
                      >
                        <div
                          className={
                            nIFalsum === false
                              ? styles.img_box
                              : styles.img_box1
                          }
                        >
                          <Image
                            className={
                              nIFalsum === false ? styles.img : styles.img1
                            }
                            src={item.img}
                            alt="Vercel Logo"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 100vw"
                            width={30}
                            height={30}
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <div
                          className={
                            nIFalsum === false
                              ? styles.text_box
                              : styles.text_box1
                          }
                        >
                          {item.name}
                        </div>
                      </div>
                    </Link>
                    <div
                      className={
                        nIFalsum === false
                          ? styles.price_box
                          : styles.price_box1
                      }
                    >
                      {item.price === 0 && (
                        <div
                          className={
                            nIFalsum === false
                              ? styles.text_box_price
                              : styles.text_box_price1
                          }
                          style={{ fontSize: "10px", width: "77px" }}
                        >
                          Зверніться до адміністратора.
                        </div>
                      )}
                      {item.price !== 0 && (
                        <div
                          className={
                            nIFalsum === false
                              ? styles.text_box_price
                              : styles.text_box_price1
                          }
                        >
                          {item.price}грн
                        </div>
                      )}

                      <FaShoppingCart
                        size={25}
                        color=" #0058a2"
                        id="basket"
                        onClick={(e) => {
                          handleBasketClick(e, {
                            categori: item.categori,
                            brand: item.brand,
                            country: item.country,
                            description: item.description,
                            img: item.img,
                            name: item.name,
                            price: item.price,
                            id: item._id,
                          });
                        }}
                        className={styles.shopping}
                      />
                    </div>
                    {cehage === index && (
                      <div
                        className={
                          nIFalsum === false
                            ? styles.text_botom_box
                            : styles.text_botom_box1
                        }
                      >
                        <div>Бренд: {item.brand}</div>
                        <div> Країна виробництва: {item.country}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
