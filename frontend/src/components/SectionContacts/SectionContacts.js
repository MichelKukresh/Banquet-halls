import React from "react";
import styles from "./SectionContacts.module.css";

export const SectionContacts = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <form className={styles.form}>
          <h3 className={styles.title}>Забронировать дату</h3>
          <span className={styles.subtitle}>
            Оставьте заявку прямо сейчас, мы свяжемся с Вами незамедлительно!
          </span>
          <input className={styles.input} placeholder=" Ваше имя"></input>
          <input className={styles.input} placeholder=" Контактный телефон"></input>
          <input className={styles.input} placeholder=" E-mail"></input>
          <input className={styles.input} placeholder=" Количество гостей"></input>
          <input className={styles.input} placeholder=" Комментарий"></input>
          <button className={styles.button}>Отправить заявку</button>
        </form>
      </div>
    </section>
  );
};
