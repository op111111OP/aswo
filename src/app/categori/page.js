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

export default function page() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [flutters, setFlutters] = useState(null);
  const [cehage, setCehage] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/findNovelty");
        const data = await response.json();
        setFlutters(data);
      } catch (error) {
        console.log("Что-то пошло не так...", error);
      } finally {
        console.log("пошло так...");
      }
    };
    fetchData();
  }, []);

  const handleSliderChange = (value) => {
    setPriceRange(value);
    useEffect(() => {
      // Filter products based on price range
      const filtered = mockProducts.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );
      setFilteredProducts(filtered);
    }, [priceRange]);
  };
  return (
    <div className={styles.main}>
      <div className={styles.main_h1_box}>
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
      <div className={styles.box}>
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
                    <Link href="./">
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
                      <Link className={styles.shopping} href="./">
                        <FaShoppingCart size={25} color=" #0058a2" />
                      </Link>
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
