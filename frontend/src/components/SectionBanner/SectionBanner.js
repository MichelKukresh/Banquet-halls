import React from "react";
import styles from "./SectionBanner.module.css";
import { FormOffer } from "../FormOffer/FormOffer";

export const SectionBanner = () => {
  return <section id="SectionBanner" className={styles.wrapper}>
    <div className={styles.container_content}> 
    
    <div className={styles.container_text}>
        <h1>Поминальные обеды в ресторане “Московские вечера”</h1>
        <p>Ресторан с отдельными закрытыми залами для проведение поминальных обедов до 80 человек.</p>


    </div>
    
    <FormOffer></FormOffer>
    
    
    </div>




  </section>;
};
