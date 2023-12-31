import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebook from "../../../../../public/assets/img/icons/facebook.svg";
import twitter from "../../../../../public/assets/img/icons/simple-icons_x.svg";
import instagram from "../../../../../public/assets/img/icons/mdi_instagram.svg";
import tiktok from "../../../../../public/assets/img/icons/ic_baseline-tiktok.svg";

const SocialNavbar = () => {
  return (
    <nav className="w-36">
      <ul className="flex justify-between">
        <li>
          <Link href={"https://www.facebook.com/DoctorWho/"} target="_blank">
            <Image
              src={facebook}
              alt="Facebook logo"
              height="auto"
              width={20}
            />
          </Link>
        </li>
        <li>
          <Link href={"https://www.facebook.com/DoctorWho/"} target="_blank">
            <Image src={twitter} alt="Twitter logo" height="auto" width={20} />
          </Link>
        </li>
        <li>
          <Link href={"https://www.facebook.com/DoctorWho/"} target="_blank">
            <Image
              src={instagram}
              alt=" Instagram logo"
              height="auto"
              width={20}
            />
          </Link>
        </li>
        <li>
          <Link href={"https://www.facebook.com/DoctorWho/"} target="_blank">
            <Image src={tiktok} alt="Tiktok logo" height="auto" width={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialNavbar;
