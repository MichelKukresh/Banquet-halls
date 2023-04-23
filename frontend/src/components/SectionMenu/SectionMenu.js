import React, { useState } from "react";
import styles from "./SectionMenu.module.css";

export const SectionMenu = () => {
  const [visibleId, setVisibleId] = useState(null);

  function handleClickOnList(id) {
    if (visibleId == id) {
      setVisibleId(null);
    } else {
      setVisibleId(id);
    }
  }

  const dataMunu = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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

  const item = dataMunu.map((i) => (
    <li onClick={() => handleClickOnList(i.id)} className={styles.list}>
      {i.title}

      {visibleId == i.id && (
        <ul>
          {i.discription.map((i) => (
            <li className={styles.listDiscription}>{i}</li>
          ))}
        </ul>
      )}
    </li>
  ));

  return (
    <section id="SectionMenu" className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.lists}>{item}</ul>
      </div>
    </section>
  );
};
