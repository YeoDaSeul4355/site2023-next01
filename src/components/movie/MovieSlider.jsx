"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import styles from "./movie.module.scss";

const MovieImg = ({ movie }) => {
  const renderPoster = () => {
    if (movie.poster_path) {
      return (
        <Image
          width={500}
          height={500}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      );
    } else {
      return (
        <Image
          width={500}
          height={500}
          src="/assets/images/movie/noImage.png"
          alt={movie.title}
          style={{ marginLeft: "0" }}
        />
      );
    }
  };
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {renderPoster()}
    </a>
  );
};

const MovieSlider = ({ movies }) => {
  return (
    <div className={styles.movie__slider}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieImg movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
