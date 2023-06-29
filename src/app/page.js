import Artist from "@/components/artist/Artist";
import Intro from "@/components/intro/Intro";
import Slider from "@/components/slider/Slider";
import Card from "@/components/card/Card";
import React from "react";
import Youtube from "@/components/youtube/Youtube";
import Unsplash from "@/components/unsplash/Unsplash";
import Movie from "@/components/movie/Movie";

const Home = () => {
    return (
        <>
            <Slider />
            <Intro />
            <Artist />
            <Card />
            <Youtube />
            <Unsplash />
            <Movie />
        </>
    );
};

export default Home;
