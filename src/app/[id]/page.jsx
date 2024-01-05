import React from "react";
import Image from "next/image";
import { doctors } from "../../../public/assets/doctors.json";

const ConoceA = ({ params: { id } }) => {
  const doctor = doctors.find((doctor) => doctor.id === +id);
  return (
    <div className="text-black">
      <h1 className="text-black">Conoce a ...{doctor.doctor}</h1>
      <Image
        src={doctor.image}
        alt={`${doctor.name}`}
        width={320}
        height={320}
        style={{
          maxWidth: "100%",
          objectFit: "cover",
          maxHeight: "350px",
        }}
      />
    </div>
  );
};

export default ConoceA;
