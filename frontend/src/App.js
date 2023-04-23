import React from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import { SectionBanner } from "./components/SectionBanner/SectionBanner";
import { SectionAdvantages } from "./components/SectionAdvantages/SectionAdvantages";
import { SectionHalls } from "./components/SectionHalls/SectionHalls";
import { SectionMenu } from "./components/SectionMenu/SectionMenu";
import { SectionContacts } from "./components/SectionContacts/SectionContacts";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className={styles.wrapper}>
              <Header></Header>
              <Main>
                <SectionBanner></SectionBanner>
                <SectionAdvantages></SectionAdvantages>
                <SectionHalls></SectionHalls>
                <SectionMenu></SectionMenu>
                <SectionContacts></SectionContacts>
              </Main>
              <Footer></Footer>
            </div>
          </>
        }
      ></Route>
      {/* <Route
        path="/halls"
        element={
          <>
            <Header></Header>
            <Main><SectionHalls></SectionHalls></Main>
          </>
        }
      ></Route> */}
    </Routes>
  );
};
