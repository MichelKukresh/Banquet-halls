import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo-livestream-svgrepo-com.svg";

export const Header = () => {
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
    <header className={styles.wrapper}>
      <div className={styles.container_top}>
        <a className={styles.listt}>+79998887755</a>
        <ul className={styles.lists}>
          <li className={styles.list}>
            <a onClick={() => handleWhatsApp()} className={styles.whatsapp}>WhatSapp</a>
          </li>
          <li className={styles.list}>
            <a className={styles.telegram}>Telegram</a>
          </li>
          <li className={styles.list}>
            <a className={styles.viber}>Viber</a>
          </li>
        </ul>
      </div>

      <div className={styles.container_bottom}>
        <a ><img className={styles.logo} src={logo}></img></a>
        <nav className={styles.navigation}>
          <ul className={styles.lists}>
            <li className={styles.list}>
              <a className={styles.link} onClick={handleToSectionBanner}>Главная</a>
            </li>
            <li className={styles.list}>
              <a className={styles.link} onClick={handleToSectionAdvantages}>Наши преимущества</a>
            </li>
            <li className={styles.list}>
              <a className={styles.link} onClick={handleToSectionHalls}>Наши залы</a>
            </li>
            <li className={styles.list}>
              <a className={styles.link} onClick={handleToSectionMenu}>Наше меню</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
