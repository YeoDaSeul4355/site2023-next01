import React from "react";
import styles from "./footer.module.css";

const links = [
  {
    title: "전시 일정",
    items: [
      { text: "현재 전시", link: "/" },
      { text: "다가오는 전시", link: "/" },
      { text: "이전 전시", link: "/" },
    ],
  },
  {
    title: "미술 용어 사전",
    items: [
      { text: "시대적 배경", link: "/" },
      { text: "주요 용어", link: "/" },
      { text: "흐름과 학파", link: "/" },
      { text: "예술 암호 해석", link: "/" },
      { text: "예술가의 업적", link: "/" },
    ],
  },
  {
    title: "작품 갤러리",
    items: [
      { text: "테마별 작품", link: "/" },
      { text: "인기 작품", link: "/" },
      { text: "신규 작품", link: "/" },
      { text: "시대별 작품", link: "/" },
    ],
  },
  {
    title: "문의 및 지원",
    items: [
      { text: "공지사항", link: "/" },
      { text: "문의사항", link: "/" },
      { text: "이벤트", link: "/" },
      { text: "FAQ", link: "/" },
      { text: "1:1 문의", link: "/" },
    ],
  },
];
const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer__wrap section bg-blue dream5"
      role="contentinfo"
    >
      <div className="footer__inner container">
        <div className={"footer__text"}>
          <h5>Mordern Art</h5>
          <p>
            궁금한 사항은
            <br />
            메일로 연락주세요!
            <br />
            <a href="mailto:dsy1943@naver.com">dsy1943@naver.com</a>
          </p>
          <ul className="sns">
            <li>
              <a href="/">
                <span className="ir">페이스북</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="ir">인스타</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="ir">유튜브</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="ir">깃허브</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <div>
            <h4>전시 일정</h4>
            <ul>
              <li>
                <a href="/">현재 전시</a>
              </li>
              <li>
                <a href="/">다가오는 전시</a>
              </li>
              <li>
                <a href="/">이전 전시</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>미술 용어 사전</h4>
            <ul>
              <li>
                <a href="/">시대적 배경</a>
              </li>
              <li>
                <a href="/">주요 용어</a>
              </li>
              <li>
                <a href="/">흐름과 학파</a>
              </li>
              <li>
                <a href="/">예술 암호 해석</a>
              </li>
              <li>
                <a href="/">예술가의 업적</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>작품 갤러리</h4>
            <ul>
              <li>
                <a href="/">테마별 작품</a>
              </li>
              <li>
                <a href="/">인기 작품</a>
              </li>
              <li>
                <a href="/">신규 작품</a>
              </li>
              <li>
                <a href="/">시대별 작품</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>문의 및 지원</h4>
            <ul>
              <li>
                <a href="/">공지사항</a>
              </li>
              <li>
                <a href="/">문의사항</a>
              </li>
              <li>
                <a href="/">이벤트</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">1:1 문의</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          Copyright 2023. All Rights Reserved. - Designed by Yeo Da Seul
        </div>
      </div>
    </footer>
  );
};

export default Footer;
