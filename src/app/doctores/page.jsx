import React from "react";
import { doctors } from "../../../public/assets/doctors.json";
import Image from "next/image";
import styles from "./doctores.module.css";

const Doctores = () => {
  return (
    <>
      <section className={styles.doctors_container}>
        <h2 className="text-4xl font-bold text-white">Doctores</h2>
        <ul className={styles.doctors_grid}>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              <article className={styles.card_doctor}>
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
                <h3 className="font-bold text-2xl">{doctor.doctor}</h3>
                <h4 className="italic">{doctor.actor}</h4>
                <time>{doctor.screen_time}</time>
                <button className={styles.card_button}>Ver más</button>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Doctores;
