"use client";
import React, { useEffect, useState } from "react";
import ContTitle from "@/components/title/ContTitle";
import YoutubeSearch from "@/components/youtube/YoutubeSearch";
import YoutubeTag from "@/components/youtube/YoutubeTag";
import YoutubeCont from "@/components/youtube/YoutubeCont";

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=현대미술&type=video&videoDuration=medium&key=AIzaSyAK7YibL0SlW8R3bLjAuG8S33Ps3XRRAio"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();

      setYoutubes(data.items);
    };
    getData();
  }, []);

  console.log(youtubes);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${query}&type=video&videoDuration=medium&key=AIzaSyAK7YibL0SlW8R3bLjAuG8S33Ps3XRRAio`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <ContTitle title="youtube" />
      <YoutubeSearch onSearch={search} />
      <YoutubeTag onSearch={search} />
      <YoutubeCont youtubes={youtubes} />
    </>
  );
};

export default Youtube;
