import React from "react";
import SocialNavbar from "../SocialNavbar/SocialNavbar";
import Image from "next/image";
import logoCadena from "../../../../../public/assets/img/logos/logo-cadena.png";

const Footer = () => {
  return (
    <footer className="bg-[#040521] text-white   flex flex-col ">
      <div className="border-solid border-2 border-white w-full p-1"></div>
      <div className="h-16 flex justify-between  px-16 items-center ">
        <Image src={logoCadena} alt="Logo cadena " width={30} height={30} />
        <SocialNavbar />
      </div>
    </footer>
  );
};

export default Footer;
