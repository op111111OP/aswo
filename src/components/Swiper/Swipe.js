"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Swipe.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function App() {
  const imgMas = [
    "https://www.aswo.com/fileadmin/shared/banners/carte.jpg",
    "https://www.aswo.com/fileadmin/shared/banners/lave_linge_2000x775px.jpg",
  ];
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        {imgMas.map((item, index) => (
          <SwiperSlide className={styles.swiper_slide} key={index}>
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
            />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
