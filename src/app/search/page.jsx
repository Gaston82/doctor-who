import Image from "next/image";
import Link from "next/link";
import { doctors } from "../../../public/assets/doctors.json";

import React from "react";
import styles from "../doctores/doctores.module.css";

const SearchResults = ({ searchParams }) => {
  const doctorsFiltered = doctors.filter((doctor) =>
    doctor.actor.toLowerCase().includes(searchParams.q.toLowerCase())
  );

  return (
    <>
      <section className={styles.doctors_container}>
        <h2 className="text-4xl font-bold text-white">Doctores</h2>
        <ul className={styles.doctors_grid}>
          {doctorsFiltered.map((doctor) => (
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
                <Link href={`/${doctor.id}`}>
                  <button className={styles.card_button}>Ver más</button>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SearchResults;
