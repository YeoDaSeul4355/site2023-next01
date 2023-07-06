import React, { useRef } from "react";
import styles from "./unsplash.module.scss";

const UnsplashSearch = ({ onSearch }) => {
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
    <div className={styles.unsplash__search}>
      <h2 className="blind">검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        onKeyPress={onKeyPress}
        placeholder="이미지 검색하기"
      />
      <button type="submit" onClick={onClick} className="button-green">
        검색
      </button>
    </div>
  );
};

export default UnsplashSearch;
