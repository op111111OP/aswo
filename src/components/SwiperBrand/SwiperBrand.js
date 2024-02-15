"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwiperBrand.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function App() {
  const [areySlide, setAreySlide] = useState(4);

  const imgMas = [
    {
      img: "https://doctor-h.com.ua/content/images/29/77x38l75nn0/81827292297291.webp",
      name: "aeg",
    },
    {
      img: "https://doctor-h.com.ua/content/images/35/77x38l75nn0/41958778882540.webp",
      name: "ardo",
    },
    {
      img: "https://doctor-h.com.ua/content/images/26/180x30l75nn0/92915233356651.webp",
      name: "ametek",
    },
    {
      img: "https://doctor-h.com.ua/content/images/4/180x79l75nn0/63441823479041.webp",
      name: "amica",
    },
    {
      img: "https://doctor-h.com.ua/content/images/2/77x38l75nn0/59361050882289.webp",
      name: "ariston",
    },
    {
      img: "https://doctor-h.com.ua/content/images/36/180x100l75nn0/39550902971057.webp",
      name: "askoll",
    },
    {
      img: "https://doctor-h.com.ua/content/images/34/180x100l75nn0/90360451058740.webp",
      name: "atlantic",
    },
    {
      img: "https://doctor-h.com.ua/content/images/32/180x68l75nn0/28191980357954.webp",
      name: "beslux",
    },
    {
      img: "https://doctor-h.com.ua/content/images/32/180x68l75nn0/28191980357954.webp",
      name: "beslux",
    },
    {
      img: "https://doctor-h.com.ua/content/images/34/180x54l75nn0/30449079637884.webp",
      name: "copreci",
    },
    {
      img: "https://doctor-h.com.ua/content/images/45/180x74l75nn0/35735801480381.webp",
      name: "danfoss",
    },
    {
      img: "https://doctor-h.com.ua/content/images/24/180x101l75nn0/60009054446197.webp",
      name: "delonghi",
    },
    {
      img: "https://doctor-h.com.ua/content/images/25/180x59l75nn0/15266602545750.webp",
      name: "domel",
    },
    {
      img: "https://doctor-h.com.ua/content/images/6/180x100l75nn0/38958517653152.webp",
      name: "ebi",
    },
  ];
  return (
    <div className={styles.box_carusel}>
      <div className={styles.now}>Бренди</div>
      <Swiper
        slidesPerView={areySlide}
        spaceBetween={0}
        navigation={false}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        loop={true}
        //   pagination={{
        //     clickable: false,
        //   }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        {imgMas.map((item, index) => (
          <SwiperSlide className={styles.swiper_slide} key={index}>
            <div className={styles.brand}>
              <Link href={`/search?search=${item.name}`}>
                <Image
                  src={item.img}
                  alt="Vercel Logo"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 100vw"
                  width={0}
                  height={0}
                  style={{
                    width: "100px",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href="/brands">
        <div className={styles.now_down}>всі бренди</div>
      </Link>
    </div>
  );
}
