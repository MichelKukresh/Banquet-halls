import React, { useState } from "react";
import styles from "./FormOffer.module.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const FormOffer = () => {
  const [startDate, setStartDate] = useState("");
  
  return (
    <form className={styles.wrapper}>
      <h2 className={styles.title}>Онлайн-бронирование зала</h2>
      <h2 className={styles.paragraph}>Оставьте заявку и мы Вам перезвоним!</h2>
      <input className={styles.input} placeholder="Ваше имя"></input>
      <input className={styles.input}  placeholder="Ваш телефон"></input>
      <DatePicker
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: "viewport",
          },
          hide: {
            enabled: false,
          },
        }}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className={styles.input}
        placeholderText="Выберите дату"
      ></DatePicker>
      <button className={styles.bottom}>Отправить заявку</button>
      <h2 className={styles.copirite}>Отправляя данные, Вы соглашаетесь с Политикой Конфиденциальности сайта</h2>
    </form>
  );
};
