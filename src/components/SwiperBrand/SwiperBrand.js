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

export default function App() {
  const imgMas = [
    "https://doctor-h.com.ua/content/images/29/77x38l75nn0/81827292297291.webp",
    "https://doctor-h.com.ua/content/images/35/77x38l75nn0/41958778882540.webp",
    "https://doctor-h.com.ua/content/images/26/180x30l75nn0/92915233356651.webp",
    "https://doctor-h.com.ua/content/images/4/180x79l75nn0/63441823479041.webp",
    "https://doctor-h.com.ua/content/images/2/77x38l75nn0/59361050882289.webp",
    "https://doctor-h.com.ua/content/images/36/180x100l75nn0/39550902971057.webp",
    "https://doctor-h.com.ua/content/images/34/180x100l75nn0/90360451058740.webp",
    "https://doctor-h.com.ua/content/images/32/180x68l75nn0/28191980357954.webp",
    "https://doctor-h.com.ua/content/images/38/77x38l75nn0/53680195548105.webp",
    "https://doctor-h.com.ua/content/images/17/180x44l75nn0/89967959610766.webp",
  ];
  return (
    <div className={styles.box_carusel}>
      <div className={styles.now}>Бренди</div>
      <Swiper
        slidesPerView={8}
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
              <Link href="">
                <Image
                  src={item}
                  alt="Vercel Logo"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 75vw, 100vw"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href="./">
        <div className={styles.now_down}>всі бренди</div>
      </Link>
    </div>
  );
}
