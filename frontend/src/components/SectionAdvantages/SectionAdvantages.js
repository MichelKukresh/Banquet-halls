import React from "react";
import styles from "./SectionAdvantages.module.css";
import { dataCardIcon } from "../../utils/dataCardIcon";

export const SectionAdvantages = () => {
  const items = dataCardIcon.map((i) => (
    <div className={styles.container_card}>
      <img className={styles.img} src={i.src} alt="картинка"></img>
      <span className={styles.title}>{i.title}</span>
    </div>
  ));

  return (
    <section id="SectionAdvantages" className={styles.wrapper}>
      <div className={styles.container}>{items}</div>
    </section>
  );
};
