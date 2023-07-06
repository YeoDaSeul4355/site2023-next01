"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import Image from "next/image";
import styles from "./unsplash.module.scss";

const UnsplashImg = ({ image }) => {
  return (
    <a href={`http://unsplash.com/photos/${image.id}`} target="_blank">
      <Image
        width={500}
        height={500}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </a>
  );
};

const UnsplashSlider = ({ images }) => {
  return (
    <div className={styles.unsplash__slider}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        EffectCards={{
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCards, Pagination, Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <UnsplashImg image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UnsplashSlider;
