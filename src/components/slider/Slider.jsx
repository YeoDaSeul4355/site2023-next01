import Image from "next/image";
import React from "react";

const Slider = () => {
    return (
        <section id="sliderSection" className="slider__wrap section dream">
            <div className="slider__inner">
                <h2 className="blind">배너 슬라이드</h2>
                <div className="slider__img">
                    <div className="slider s1 container">
                        <div className="text">
                            <h3>
                                MORDERN
                                <br />
                                ART
                            </h3>
                            <p>
                                감각적인 경험과 사회적인 의미를 통해 상상력과
                                현실의 경계를 <br />
                                허무는 근•현대 미술을 소개합니다.{" "}
                            </p>
                            <a href="/" className="more button-red">
                                더 알아보기
                            </a>
                        </div>
                        <div className="img" aria-label="hidden">
                            <Image
                                src="/assets/images/slider/slider_icon12.png"
                                alt="이미지1"
                                width={350}
                                height={300}
                            />
                            <Image
                                src="/assets/images/slider/slider_icon11.png"
                                alt="이미지2"
                                width={350}
                                height={300}
                            />
                            <Image
                                src="/assets/images/slider/slider_icon13.png"
                                alt="이미지3"
                                width={350}
                                height={300}
                            />
                        </div>
                        <div className="circle" aria-label="hidden">
                            <span className="circle c1"></span>
                            <span className="circle c2"></span>
                            <span className="circle c3"></span>
                            <span className="circle c4"></span>
                            <span className="circle c5"></span>
                        </div>
                    </div>
                </div>
                <div className="slider__btn">
                    <a href="/" className="left">
                        <span className="ir">이전이미지</span>
                    </a>
                    <a href="/" className="right">
                        <span className="ir">다음이미지</span>
                    </a>
                </div>
                <div className="slider__dot">
                    <a href="/" className="dot active">
                        <span className="ir">1번 이미지</span>
                    </a>
                    <a href="/" className="dot">
                        <span className="ir">2번 이미지</span>
                    </a>
                    <a href="/" className="dot">
                        <span className="ir">3번 이미지</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Slider;
