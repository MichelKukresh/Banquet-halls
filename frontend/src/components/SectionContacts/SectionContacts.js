import React, { useState } from "react";
import styles from "./SectionContacts.module.css";
import { postContactToMail } from "../../utils/fetch";

export const SectionContacts = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [person, setPerson] = useState("");
  const [comment, setComment] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
    //inputNameValidation(e);
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
    //inputNameValidation(e);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    //inputNameValidation(e);
  }

  function handleChangePerson(e) {
    setPerson(e.target.value);
    //inputNameValidation(e);
  }

  function handleChangeComment(e) {
    setComment(e.target.value);
    //inputNameValidation(e);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    postContactToMail({
      name: name,
      phone: phone,
      email: email,
      person: person,
      comment: comment,
    });

    setName("");
    setPhone("");
    setEmail("");
    setPerson("");
    setComment("");
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <h3 className={styles.title}>Забронировать дату</h3>
          <span className={styles.subtitle}>
            Оставьте заявку прямо сейчас, мы свяжемся с Вами незамедлительно!
          </span>
          <input
            value={name}
            onChange={handleChangeName}
            required
            className={styles.input}
            placeholder=" Ваше имя"
          ></input>
          <input
            value={phone}
            onChange={handleChangePhone}
            required
            className={styles.input}
            placeholder=" Контактный телефон"
          ></input>
          <input
            value={email}
            onChange={handleChangeEmail}
            required
            type="email"
            className={styles.input}
            placeholder=" E-mail"
          ></input>
          <input
            value={person}
            onChange={handleChangePerson}
            required
            className={styles.input}
            placeholder=" Количество гостей"
          ></input>
          <input
            value={comment}
            onChange={handleChangeComment}
            required
            className={styles.input}
            placeholder=" Комментарий"
          ></input>
          <button type="submit" className={styles.button}>
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
};
