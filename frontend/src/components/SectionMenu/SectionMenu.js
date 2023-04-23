import React from "react";
import styles from "./SectionMenu.module.css";

export const SectionMenu = () => {
  const dataMunu = [
    {
      title: "Поминальное меню 800р",
      discription: [
        "РИТУАЛЬНЫЕ БЛЮДА",
        "Кутья",
        "Кисель",
        "Блин (1 шт/чел)",
        "Мед",
      ],
    },
    {
      title: "Поминальное меню 800р",
      discription: [
        "РИТУАЛЬНЫЕ БЛЮДА",
        "Кутья",
        "Кисель",
        "Блин (1 шт/чел)",
        "Мед",
      ],
    },
    {
      title: "Поминальное меню 800р",
      discription: [
        "РИТУАЛЬНЫЕ БЛЮДА",
        "Кутья",
        "Кисель",
        "Блин (1 шт/чел)",
        "Мед",
      ],
    },
    {
      title: "Поминальное меню 800р",
      discription: [
        "РИТУАЛЬНЫЕ БЛЮДА",
        "Кутья",
        "Кисель",
        "Блин (1 шт/чел)",
        "Мед",
      ],
    },
    {
      title: "Поминальное меню 800р",
      discription: [
        "РИТУАЛЬНЫЕ БЛЮДА",
        "Кутья",
        "Кисель",
        "Блин (1 шт/чел)",
        "Мед",
      ],
    },
  ];

  const item = dataMunu.map((i) => <li className={styles.list}>{i.title}</li>);

  return (
    <section id="SectionMenu" className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.lists}>{item}</ul>
        {/* <div></div> */}
      </div>
    </section>
  );
};
