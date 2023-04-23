import React from "react";
import styles from "./Footer.module.css";

import WS from "../../images/WhatsApph.svg";
import TL from "../../images/Telegramh.svg";
import VI from "../../images/Viberh.svg";

export const Footer = () => {
  function handleToSectionHalls(event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
    const section = document.getElementById("SectionHalls");

    section.scrollIntoView(false);
  }

  function handleToSectionAdvantages(event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
    const section = document.getElementById("SectionAdvantages");
    section.scrollIntoView(false); // Прокручиваем до элемента { behavior: "smooth" }
  }

  function handleToSectionMenu(event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
    const section = document.getElementById("SectionMenu");
    section.scrollIntoView(false); // Прокручиваем до элемента
  }

  function handleToSectionBanner(event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
    const section = document.getElementById("SectionBanner");
    section.scrollIntoView(false); // Прокручиваем до элемента
  }
  
  function handleWhatsApp() {
    window.location.href = "https://api.whatsapp.com/send/?phone=79013437024";
  }
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.lists}>
            <li className={styles.list}>
              <a onClick={handleToSectionBanner}>Главная</a>
            </li>
            <li className={styles.list}>
              <a onClick={handleToSectionAdvantages}>Наши преимущества</a>
            </li>
            <li className={styles.list}>
              <a onClick={handleToSectionHalls}>Наши залы</a>
            </li>
            <li className={styles.list}>
              <a onClick={handleToSectionMenu}>Наше меню</a>
            </li>
          </ul>
        </nav>
        <div className={styles.containerSocial}>
          <img className={styles.social} src={WS} onClick={() => handleWhatsApp()}></img>
          <img className={styles.social} src={TL}></img>
          <img className={styles.social} src={VI}></img>
        </div>
      </div>
    </footer>
  );
};
