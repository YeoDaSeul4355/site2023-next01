"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import ContTitle from "@/components/title/ContTitle";
import MovieSlider from "@/components/movie/MovieSlider";
import MovieSearch from "@/components/movie/MovieSearch";
import MovieTag from "@/components/movie/MovieTag";
import MovieCont from "@/components/movie/MovieCont";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=86951144e4cb4c72a22189f65fc8c04b&limit=30"
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();

      setMovies(data.results);
    };
    getData();
  }, []);

  console.log(movies);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=86951144e4cb4c72a22189f65fc8c04b&language=ko-KR&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  const tags = async (query) => {
    await fetch(
      `${query}?api_key=86951144e4cb4c72a22189f65fc8c04b&language=ko-KR`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <ContTitle title="movie" />
      <MovieSlider movies={movies} />
      <MovieSearch onSearch={search} />
      <MovieTag onSearch={tags} />
      <MovieCont movies={movies} />
    </>
  );
};

export default Movie;
