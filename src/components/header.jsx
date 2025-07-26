import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  return (
    <>
      {/* header top */}
      <div className="flex justify-between items-center h-6 px-32 bg-primary-light text-secondary">
        {/* right */}
        <div className="flex justify-center items-center gap-4">
          <a href="#" className=" text-xs font-medium">
            نوبت دهی آنلاین
          </a>
          <a href="tel:+989932652456" className="text-sm font-medium">
            09932652456
          </a>
        </div>
        {/* socials */}
        <div className="flex justify-center item-center gap-2">
          <a href="https://www.instagram.com/dr.sajad.zarin/" target="__blank">
            <AiFillInstagram />
          </a>
          <a href="https://t.me/iam4bol">
            <FaTelegram />
          </a>
          <a href="#">
            <IoLogoWhatsapp />
          </a>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-10 bg-primary h-16 shadow-2xl z-50">
        {/* logo */}
        <img src="/logo.png" alt="logo" className="w-10 " />
        {/* links */}
        <ul className="flex justify-center items-center">
          <li>
            <a
              href="#"
              className="text-secondary font-medium px-6 transition-all hover:text-secondary-light"
            >
              صفحه اصلی
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-secondary font-medium px-6 transition-all hover:text-secondary-light"
            >
              محصولات
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-secondary font-medium px-6 transition-all hover:text-secondary-light"
            >
              خدمات
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-secondary font-medium px-6 transition-all hover:text-secondary-light"
            >
              مقالات
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-secondary font-medium px-6 transition-all hover:text-secondary-light"
            >
              گالری عکس
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-secondary font-medium px-6 transition-all hover:text-secondary-light"
            >
              درباره ما
            </a>
          </li>
        </ul>
        {/* login/sign in & shopping cart */}
        <div className="flex justify-center items-center gap-6">
          {/* shopping cart */}
          <a
            href="#"
            className="text-secondary text-xl rounded-md p-2 transition-all hover:text-primary hover:bg-secondary"
          >
            <FaCartShopping />
          </a>
          {/* login/signin */}
          <a
            href="#"
            className="text-secondary font-light border py-2 px-6 rounded-md transition-all hover:bg-secondary hover:text-primary"
          >
            ثبت نام
          </a>
        </div>
      </div>
    </>
  );
}
