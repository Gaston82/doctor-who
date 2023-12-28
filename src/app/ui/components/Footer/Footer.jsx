import React from "react";
import SocialNavbar from "../SocialNavbar/SocialNavbar";
import Image from "next/image";
import logoCadena from "../../../../../public/assets/img/logos/logo-cadena.png";

const Footer = () => {
  return (
    <footer className="bg-[#040521] text-white h-24 flex justify-between items-center px-16 ">
      <Image src={logoCadena} alt="Logo cadena " width={30} height={30} />
      <SocialNavbar />
    </footer>
  );
};

export default Footer;
