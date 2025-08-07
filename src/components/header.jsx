import React from "react";
import { FaLocationDot, FaT } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Header() {
  return (
    <>
      {/* top information */}
      <div className="flex justify-between items-center px-10 py-1 text-secondary bg-black">
        {/* location & time reserve */}
        <div className="flex gap-4 font-medium text-sm">
          {/* location */}
          <a className="flex gap-1 items-center" href="https://maps.app.goo.gl/edgPncntiPXrnDkx5" target="__blank">
            <FaLocationDot />
            <span>کلینیک رو پیدا کن</span>
          </a>
          {/* time reserve */}
          <a className="flex gap-1 items-center" href="https://doctor-yab.ir/Search/30965/%D8%AF%DA%A9%D8%AA%D8%B1-%D8%B3%D8%AC%D8%A7%D8%AF-%D8%B2%D8%B1%DB%8C%D9%86/" target="__blank">
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
    </>
  );
}
