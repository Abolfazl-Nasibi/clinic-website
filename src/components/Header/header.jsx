import React, { useEffect, useState } from "react";
import { FaLocationDot, FaT } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

import NavItem from "./NavItem";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // it will be fixed position while scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pages = [
    { label: "صفحه اصلی", href: "#" },
    { label: "محصولات", href: "#" },
    { label: "خدمات", href: "#" },
    { label: "گالری", href: "#" },
    { label: "مقالات", href: "#" },
    { label: "درباره ما", href: "#" },
  ];

  return (
    <>
      {/* top information */}
      <div
        className={`flex justify-between items-center px-10 py-1 text-secondary bg-black `}
      >
        {/* location & time reserve */}
        <div className="flex gap-4 font-medium text-sm">
          {/* location */}
          <a
            className="flex gap-1 items-center"
            href="https://maps.app.goo.gl/edgPncntiPXrnDkx5"
            target="__blank"
          >
            <FaLocationDot />
            <span>کلینیک رو پیدا کن</span>
          </a>
          {/* time reserve */}
          <a
            className="flex gap-1 items-center"
            href="https://doctor-yab.ir/Search/30965/%D8%AF%DA%A9%D8%AA%D8%B1-%D8%B3%D8%AC%D8%A7%D8%AF-%D8%B2%D8%B1%DB%8C%D9%86/"
            target="__blank"
          >
            <IoTime />
            <span>رزرو آنلاین نوبت</span>
          </a>
        </div>
        {/* social media links */}
        <div className="flex items-center gap-2">
          <a href="https://www.instagram.com/dr.sajad.zarin/" target="__blank">
            <RiInstagramFill />
          </a>
          <a href="tel:+989932652456" target="__blank">
            <FaTelegram />
          </a>
          <a href="#" target="__blank">
            <IoLogoWhatsapp />
          </a>
        </div>
      </div>

      {/* header */}
      <div
        className={`flex items-center justify-between px-10 transition-all py-2 ${
          scrolled
            ? "bg-primary-dark shadow-md fixed top-0 right-0 left-0 border-b-1"
            : "absolute top-8 left-0 right-0"
        }`}
      >
        {/* logo */}
              <img src={`${import.meta.env.BASE_URL}/logo-gold.png`}  className="w-8"/>

        {/* pages */}
        <ul className="flex items-center gap-10">
          {pages.map((page) => (
            <NavItem key={page.label} label={page.label} href={page.href} scrolled={scrolled} />
          ))}
        </ul>
        {/* signIn/login & cart */}
        <div className="flex items-center gap-2">
          {/* cart */}
          <a href="#" className={` text-secondary `}>
            <FaCartShopping />
          </a>
          {/* signIn/login */}
          <a
            href="#"
            className={`font-medium border-2 rounded-md px-4 py-1 border-secondary text-secondary hover:bg-secondary hover:text-primary-dark transition-all`}
          >
            ثبت نام
          </a>
        </div>
      </div>
    </>
  );
}
