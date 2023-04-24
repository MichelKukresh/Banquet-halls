import React from "react";
import styles from "./SectionMap.module.css";

export const SectionMap = () => {
  return (
    <>
      <section className={styles.wrapper} >
        <div className={styles.contaimer_desctop}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Abf1bcad532ee313184d485625d2f983d56cb3db73b8771c39575cfa1946d19b3&amp;source=constructor"
            width="1280"
            height="548"
            frameborder="0"
          ></iframe>
        </div>

        {/* <div className={styles.contaimer_mobile}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Abf1bcad532ee313184d485625d2f983d56cb3db73b8771c39575cfa1946d19b3&amp;source=constructor"
            width="1280"
            height="250"
            frameborder="0"
          ></iframe>
        </div> */}
      </section>
    </>
  );
};
