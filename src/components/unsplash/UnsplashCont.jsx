import Image from "next/image";
import React from "react";
import styles from "./unsplash.module.scss";

const UnsplashImg = ({ image }) => {
  return (
    <li>
      <a href={`http://unsplash.com/photos/${image.id}`} target="_blank">
        <Image
          width={500}
          height={300}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </a>
    </li>
  );
};

const UnsplashCont = ({ images }) => {
  return (
    <div className={`${styles.unsplash__cont} container`}>
      <ul>
        {images.map((image, index) => (
          <UnsplashImg key={index} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default UnsplashCont;
