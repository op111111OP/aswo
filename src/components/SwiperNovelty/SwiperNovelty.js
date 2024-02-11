"use client";
// Import Swiper React components
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./SwipeNovelty.css";
import styles from "./SwiperNovelty.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaShoppingCart } from "react-icons/fa";
// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useUserContext } from "../../app/Context/store";
import Basket from "../Basket/Basket";

export default function App() {
  const { setId } = useUserContext();
  const [cehageCor, setCehageCor] = useState(false);
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
  const handleBoxClick = () => {
    setCehageCor(false);
  };

  const handleBasketClick = (e, object) => {
    // addToArray(object);

    setCehageCor(true);
    // Остановить всплытие события, чтобы не срабатывал клик на боксе
    e.stopPropagation();
  };
  function fals(t) {
    setCehageCor(t);
  }

  return (
    <div className={styles.box_carusel} onClick={handleBoxClick}>
      {cehageCor && <Basket fals={fals} />}
      <div className={styles.now}>Новинки</div>
      <div id="gallery1">
        {Array.isArray(flutters) ? (
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            observeVisibility={true}
            loop={true}
            modules={[Navigation]}
            className={styles.swiper}
          >
            {flutters.map((item, index) => (
              <SwiperSlide
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
                  <Link href={`./product?id=${item._id}`}>
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
                    <div className={styles.text_box_price}>{item.price}грн</div>

                    <FaShoppingCart
                      size={25}
                      color=" #0058a2"
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
                      className={styles.FaShoppingCart}
                    />
                  </div>
                  {cehage === index && (
                    <div className={styles.text_botom_box}>
                      <div>Бренд: {item.brand}</div>
                      <div> Країна виробництва: {item.country}</div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.swiper}>Загрузка...</div>
        )}
      </div>
    </div>
  );
}
