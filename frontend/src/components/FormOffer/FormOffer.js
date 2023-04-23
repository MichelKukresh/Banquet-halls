import React, { useState } from "react";
import styles from "./FormOffer.module.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { postOfferToMail } from "../../utils/fetch";

export const FormOffer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [person, setPerson] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
    //inputNameValidation(e);
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
    //inputNameValidation(e);
  }

  function handleChangePerson(e) {
    setPerson(e.target.value);
    //inputNameValidation(e);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    if (startDate === "") {
      alert("Выберите дату!");
      return;
    } else {
      // Передаём значения управляемых компонентов во внешний обработчик
      postOfferToMail({
        name: name,
        phone: phone,
        data: startDate,
        person: person,
      });

      setName("");
      setPhone("");
      setStartDate("");
      setPerson("");
    }
  }

  return (
    <form className={styles.wrapper} onSubmit={(e) => handleSubmit(e)}>
      <h2 className={styles.title}>Онлайн-бронирование зала</h2>
      <h2 className={styles.paragraph}>Оставьте заявку и мы Вам перезвоним!</h2>
      <input
        required
        value={name}
        onChange={handleChangeName}
        className={styles.input}
        placeholder="Ваше имя"
      ></input>
      <input
        required
        value={phone}
        onChange={handleChangePhone}
        className={styles.input}
        placeholder="Ваш телефон"
      ></input>
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

      <input
        required
        value={person}
        onChange={handleChangePerson}
        className={styles.input}
        placeholder="Количество персон"
      ></input>
      <button type="submit" className={styles.bottom}>
        Отправить заявку
      </button>
      <h2 className={styles.copirite}>
        Отправляя данные, Вы соглашаетесь с Политикой Конфиденциальности сайта
      </h2>
    </form>
  );
};
