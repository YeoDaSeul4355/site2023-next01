import Image from "next/image";
import React from "react";
import styles from "./youtube.module.scss";

const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
        target="_blank"
      >
        <Image
          width={300}
          height={200}
          src={youtube.snippet.thumbnails.medium.url}
          alt={youtube.snippet.title}
        />
        <span>{youtube.snippet.title}</span>
      </a>
    </li>
  );
};

const YoutubeCont = ({ youtubes }) => {
  return (
    <div className={`${styles.youtube__cont} container`}>
      <ul>
        {youtubes.map((youtube, index) => (
          <YoutubeItem key={index} youtube={youtube} />
        ))}
      </ul>
    </div>
  );
};

export default YoutubeCont;
