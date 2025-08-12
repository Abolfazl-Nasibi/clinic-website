import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="px-110 py-10 bg-primary-dark text-secondary">
      {/* informations & socials */}
      <div className="flex justify-between">
        {/* logo & location & email */}
        <div className="flex items-center gap-4 ">
          {/* logo */}
          <img
            src={`${import.meta.env.BASE_URL}/logo-gold.png`}
            className="w-8 h-10"
          />
          {/* location & email */}
          <div className="">
            {/* location */}
            <a href="https://maps.app.goo.gl/edgPncntiPXrnDkx5" className="flex items-center gap-1">
              <FaLocationDot />
              <span className="font-thin">یاسوج سردار۶</span>
            </a>
            {/* email */}
            <div className="flex items-center gap-1">
              <MdAlternateEmail />
              <a href="#" className="font-thin">blablabla@gmail.com</a>
            </div>
          </div>
        </div>
        {/* socials */}
        <div className="flex gap-4 items-center">
            <a className="text-xl border rounded-[50%] p-3 hover:bg-secondary hover:text-primary-dark transition-all" href="tel:+989932652456" target="__blank"><RiTelegram2Line /></a>
            <a className="text-xl border rounded-[50%] p-3 hover:bg-secondary hover:text-primary-dark transition-all" href="https://www.instagram.com/dr.sajad.zarin/" target="__blank"><FaInstagram /></a>
            <a className="text-xl border rounded-[50%] p-3 hover:bg-secondary hover:text-primary-dark transition-all" href="#" target="__blank"><FaWhatsapp /></a>
        </div>
      </div>
    </div>
  );
}
