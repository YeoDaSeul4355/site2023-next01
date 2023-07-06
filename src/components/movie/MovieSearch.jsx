import React, { useRef } from "react";
import styles from "./movie.module.scss";

const MovieSearch = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const onClick = () => {
    handleSearch();
  };

  return (
    <div className={styles.movie__search}>
      <h2 className="blind">검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        onKeyPress={onKeyPress}
        placeholder="영화 검색하기"
      />
      <button type="submit" onClick={onClick} className="button-yellow">
        검색
      </button>
    </div>
  );
};

export default MovieSearch;
