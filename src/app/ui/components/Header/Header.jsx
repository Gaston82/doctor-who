import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../public/assets/img/logos/logo.png";
import facebook from "../../../../../public/assets/img/icons/facebook.svg";
import twitter from "../../../../../public/assets/img/icons/simple-icons_x.svg";
import instagram from "../../../../../public/assets/img/icons/mdi_instagram.svg";
import tiktok from "../../../../../public/assets/img/icons/ic_baseline-tiktok.svg";

const Header = () => {
  return (
    <header className="bg-[#040521] text-white h-24 flex justify-between items-center px-16 ">
      <nav className="w-80">
        <ul className="flex justify-between">
          <li>
            <a href="http://">Conoce a</a>
          </li>
          <li>
            <a href="http://">Doctores</a>
          </li>
          <li>
            <a href="http://">Contacto</a>
          </li>
        </ul>
      </nav>
      <Image
        className="object-contain "
        src={logo}
        width={120}
        height={120}
        alt="Doctor Who logo"
        priority={true}
        style={{ paddingTop: "40px" }}
      />
      <nav className="w-36">
        <ul className="flex justify-between">
          <li>
            <Link href={"https://www.facebook.com/DoctorWho/"} target="_blank">
              <Image
                src={facebook}
                alt="facebook logo"
                height={20}
                width={20}
              />
            </Link>
          </li>
          <li>
            <Link href={"https://www.facebook.com/DoctorWho/"} target="_blank">
              <Image src={twitter} alt="facebook logo" height={20} width={20} />
            </Link>
          </li>
          <li>
            <Link href={"https://www.facebook.com/DoctorWho/"} target="_blank">
              <Image
                src={instagram}
                alt="facebook logo"
                height={20}
                width={20}
              />
            </Link>
          </li>
          <li>
            <Link href={"https://www.facebook.com/DoctorWho/"} target="_blank">
              <Image src={tiktok} alt="facebook logo" height={20} width={20} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
