import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Header() {
  return (
    <>
      {/* header top */}
      <div className="flex justify-between items-center h-6 px-32 bg-primary-light text-secondary">
        {/* right */}
        <div className="flex justify-center items-center gap-4">
          <a href="#" className=" text-xs font-medium">نوبت دهی آنلاین</a>
          <a href="tel:+989932652456" className="text-sm font-medium">09932652456</a>
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
    </>
  );
}
