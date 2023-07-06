import React from "react";
import ContTitle from "@/components/title/ContTitle";
import IntroCont from "@/components/intro/IntroCont";

const Intro = () => {
  return (
    <>
      <ContTitle
        title="Intro"
        desc="근•현대 미술에 대한 소개입니다. 다양한 작품들과 미디어를 접해보세요!"
      />
      <IntroCont />
    </>
  );
};

export default Intro;
