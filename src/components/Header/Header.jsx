"use client";
import Link from "next/link";
import Image from "next/image";
import * as icon from "@/assets/index";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "nord"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dracula");
    } else {
      setTheme("nord");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <main className="navbar">
      <div className="navbar-start">Logo</div>
      <ul className="navbar-center list-none flex justify-center items-center gap-3">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Menu</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
      <div className="navbar-end flex items-center gap-2">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller"
            onChange={handleToggle}
            checked={theme === "nord" ? false : true}
          />
          <Image
            className="dark:invert swap-off w-8 h-8"
            src={icon.sun}
            alt="light"
          />
          <Image
            className="dark:invert swap-on w-8 h-8"
            src={icon.moon}
            alt="dark"
          />
        </label>
        <Image
          className="dark:invert"
          src={icon.languageIcon}
          alt="laguage-icon"
        />
      </div>
    </main>
  );
};
export default Header;