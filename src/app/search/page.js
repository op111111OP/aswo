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
import { useUserContext } from "../Context/store";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const { setUserId, setId, setOnCard1 } = useUserContext();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [flutters, setFlutters] = useState([]);
  const [cehage, setCehage] = useState(false);
  const [cehageCor, setCehageCor] = useState(false);
  const [nIFalsum, setIFals] = useState(true);
  const sortByValueAscending = () => {
    const sortedArray = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sortedArray);
  };
  const sortByValueDescending = () => {
    const sortedArray = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sortedArray);
  };
  const addToArray = (newItem) => {
    setUserId(newItem);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/search/${search}`);
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
  }, [search]);

  useEffect(() => {
    setPriceRange([
      Math.min(...flutters.map((obj) => obj.price)),
      Math.max(...flutters.map((obj) => obj.price)),
    ]);
  }, [flutters]);
  //   bbbbbbbbbbbbbbbbb
  const handleSliderChange = (value) => {
    setPriceRange(value);
    const filtered = flutters.filter(
      (product) => product.price >= value[0] && product.price <= value[1]
    );
    setFilteredProducts(filtered);
  };
  const handleBoxClick = () => {
    setCehageCor(false);
  };
  const handleBasketClick = (e, object) => {
    setOnCard1(object);
    setCehageCor(true);
    e.stopPropagation();
  };
  function fals(t) {
    setCehageCor(t);
  }
  return (
    <div className={styles.main}>
      {cehageCor && <Basket fals={fals} />}
      {cehageCor && (
        <div
          className={styles.auto}
          onClick={() => {
            setCehageCor(false);
          }}
        ></div>
      )}
      <div className={styles.header_auto}>
        <FaShoppingCart
          size={25}
          className={styles.FaShoppingCart}
          onClick={() => {
            setCehageCor(true);
          }}
        />
      </div>
      <div className={styles.main_h1_box} id="myBox" onClick={handleBoxClick}>
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
        <div className={styles.box_slider}>
          <div className={styles.price_box_cl}>
            <div className={styles.price_min}>{priceRange[0]}</div>
            <div className={styles.price_max}>{priceRange[1]}</div>
          </div>
          <div className={styles.slider}>
            <Slider
              range
              min={Math.min(...flutters.map((obj) => obj.price))}
              max={Math.max(...flutters.map((obj) => obj.price))}
              step={1}
              value={priceRange}
              onChange={handleSliderChange}
              className={styles.slider_el}
            />
          </div>
        </div>
        <div className={styles.box_right}>
          {nIFalsum && (
            <div className={styles.right_h1}>
              <div className={styles.right_h2}>Назва</div>
              <div className={styles.right_hh}>
                <div className={styles.right_h2}>Ціна</div>
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
