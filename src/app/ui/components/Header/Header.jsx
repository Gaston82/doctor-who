import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../public/assets/img/logos/logo.png";
import SocialNavbar from "../SocialNavbar/SocialNavbar";

const Header = () => {
  return (
    <header className="bg-[#040521] text-white h-24 flex justify-between items-center px-16 ">
      <nav className="w-80">
        <ul className="flex justify-between">
          <Link href={"/conoce"}>Conoce a </Link>
          <Link href={"/doctores"}>Doctores</Link>
          <li>
            <a href="http://">Contacto</a>
          </li>
        </ul>
      </nav>
      <Image
        className="object-contain "
        src={logo}
        width={120}
        height="auto"
        alt="Doctor Who logo"
        priority={true}
        style={{ paddingTop: "40px" }}
      />
      <SocialNavbar />
    </header>
  );
};

export default Header;
