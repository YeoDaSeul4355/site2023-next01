import React from "react";
import styles from "./unsplash.module.scss";

const unsplashTage = [
  { name: "미술", url: "art" },
  { name: "모던", url: "morden" },
  { name: "구조물", url: "sculpture" },
  { name: "디자인", url: "design" },
  { name: "일러스트", url: "illustration" },
  { name: "타투", url: "tattoo" },
];

const UnsplashTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = React.useState("");
  function btnClick(e) {
    const clickedTag = unsplashTage.find(
      (tag) => tag.name === e.target.innerText
    );
    if (clickedTag) {
      setActiveTag(clickedTag.name);
      onSearch(clickedTag.url);
    }
  }
  return (
    <div className={`${styles.unsplash__tag} container`}>
      <div>
        {unsplashTage.map((tag, index) => (
          <button
            onClick={btnClick}
            key={index}
            className={tag.name === activeTag ? "active" : ""}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnsplashTag;
