import React from "react";
import styles from "./Main.module.css";
import { SectionBanner } from "../SectionBanner/SectionBanner";
import { SectionAdvantages } from "../SectionAdvantages/SectionAdvantages";
import { SectionHalls } from "../SectionHalls/SectionHalls";

export const Main = (props) => {
  return (
    <main className={styles.wrapper}>
      {props.children}
      
    </main>
  );
};
