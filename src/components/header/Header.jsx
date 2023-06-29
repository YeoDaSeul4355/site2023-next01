import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "소개",
    url: "/intro",
  },
  {
    id: 3,
    title: "유명 작품",
    url: "/card",
  },
  {
    id: 4,
    title: "유튜브",
    url: "/youtube",
  },
  {
    id: 5,
    title: "이미지",
    url: "/unsplash",
  },
  {
    id: 6,
    title: "영화",
    url: "/movie",
  },
];

const Header = () => {
  return (
    <header
      id="header"
      className="header__wrap dream bg-blue"
      role="heading"
      aria-level="1"
    >
      <div className="header__inner container">
        <h1 className="header__logo">
          <Link href="/">
            MORDERN <em>art</em>
          </Link>
        </h1>
        <div className="header__nav" role="navigation">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
