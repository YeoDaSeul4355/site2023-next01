import React from "react";
import Image from "next/image";
import styles from "./movie.module.scss";

const MovieItem = ({ movie }) => {
  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${movie.id}`}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.alt_description}
          width={400}
          height={600}
        />
      </a>
      <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
        <em>
          <span className={styles.title}>{movie.title}</span>
          <span className={styles.star}>{movie.vote_average}</span>
        </em>
      </a>
    </li>
  );
};

export default MovieItem;
