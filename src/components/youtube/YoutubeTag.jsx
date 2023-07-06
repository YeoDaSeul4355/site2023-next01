import React from "react";
import styles from "./youtube.module.scss";

const youtubeTag = [
  { name: "현대 미술" },
  { name: "서양화" },
  { name: "동양화" },
  { name: "소묘" },
  { name: "수채화" },
  { name: "일러스트" },
];

const YoutubeTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = React.useState("");
  function btnClick(e) {
    setActiveTag(e.target.innerText);
    onSearch(e.target.innerText);
  }
  return (
    <div className={styles.youtube__tag}>
      <div>
        {youtubeTag.map((tag, index) => (
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

export default YoutubeTag;
