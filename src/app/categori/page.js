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

export default function Page() {
  const [onCategori, setOnCategori] = useLocalStorage("onCategori");
  const [onCard, setOnCard] = useLocalStorage("onCard", []);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [flutters, setFlutters] = useState(null);
  const [cehage, setCehage] = useState(false);
  const [cehageCor, setCehageCor] = useState(false);
  //   console.log(onCard);
  const addToArray = (newItem) => {
    setOnCard((prevArray) => {
      if (!prevArray.includes(newItem)) {
        return [...prevArray, newItem];
      } else {
        return prevArray;
      }
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/categori/${onCategori}`);
        const data = await response.json();
        setFlutters(data);
      } catch (error) {
        console.log("Что-то пошло не так...", error);
      } finally {
        console.log("пошло так...");
      }
    };
    fetchData();
  }, [onCategori]);
  const handleSliderChange = (value) => {
    setPriceRange(value);
    const filtered = priceRange.filter(
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
    //  setOnCard([]);
    setCehageCor(true);
    // Остановить всплытие события, чтобы не срабатывал клик на боксе
    e.stopPropagation();
  };
  return (
    <div className={styles.main}>
      {cehageCor && <Basket />}
      <div className={styles.main_h1_box} id="myBox" onClick={handleBoxClick}>
        <div className={styles.main_h1}>Пускова кнопка для бетономішалки</div>
        <div className={styles.main_h2}>
          <div className={styles.main_sort}>Сортування:</div>
          <div className={styles.main_p_box}>
            <div className={styles.main_p1}>спочатку дешевше</div>
            <div className={styles.main_p2}>спочатку дорожчі</div>
          </div>
          <div className={styles.reflection_box}>
            <div className={styles.reflection}>Відображення:</div>
            <div className={styles.reflection_icon}>
              <HiSquares2X2 />
              <BsCardList />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box} id="myBox" onClick={handleBoxClick}>
        <div className={styles.box_left}>
          <div className={styles.box_slider}>
            <div className={styles.price_box}>
              <div className={styles.price_min}>{priceRange[0]}</div>
              <div className={styles.price_max}>{priceRange[1]}</div>
              <div className={styles.price_ok}>ok</div>
            </div>
            <div className={styles.slider}>
              <Slider
                range
                min={0}
                max={100}
                step={1}
                value={priceRange}
                onChange={handleSliderChange}
              />
            </div>
          </div>
          <div className={styles.categori_box_left}>
            <div className={styles.categori_left}>Перемикачі</div>
            <div className={styles.categori_left}>Перемикачі</div>
            <div className={styles.categori_left}>Перемикачі</div>
            <div className={styles.categori_left}>Перемикачі</div>
            <div className={styles.categori_left}>Перемикачі</div>
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.right_h1}>
            <div className={styles.right_h2}>Назва</div>
            <div className={styles.right_h2}>Ціна</div>
            <div className={styles.right_h2}>Замовлення</div>
          </div>
          <div className={styles.right_goods_box}>
            {Array.isArray(flutters) &&
              flutters.map((item, index) => (
                <div
                  className={styles.swiper_slide}
                  key={index}
                  onMouseEnter={() => {
                    setCehage(index);
                  }}
                  onMouseLeave={() => {
                    setCehage(false);
                  }}
                >
                  <div className={styles.slide_box}>
                    <Link href="./product">
                      <div className={styles.link_box}>
                        <div className={styles.img_box}>
                          <Image
                            className={styles.img}
                            src={item.img}
                            alt="Vercel Logo"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 100vw"
                            width={100}
                            height={100}
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <div className={styles.text_box}>{item.name}</div>
                      </div>
                    </Link>
                    <div className={styles.price_box}>
                      <div className={styles.text_box_price}>
                        {item.price}грн
                      </div>

                      <FaShoppingCart
                        size={25}
                        color=" #0058a2"
                        id="basket"
                        onClick={(e) =>
                          handleBasketClick(e, {
                            categori: item.categori,
                            brand: item.brand,
                            country: item.country,
                            description: item.description,
                            img: item.img,
                            name: item.name,
                            price: item.price,
                            id: item.id,
                          })
                        }
                        className={styles.shopping}
                      />
                    </div>
                    {cehage === index && (
                      <div className={styles.text_botom_box}>
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
