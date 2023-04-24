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
import { SectionMap } from "./components/SectionMap/SectionMap";

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Main>
        <SectionBanner></SectionBanner>
        <SectionAdvantages></SectionAdvantages>
        <SectionHalls></SectionHalls>
        <SectionMenu></SectionMenu>
        <SectionContacts></SectionContacts>
        <SectionMap></SectionMap>
      </Main>
      <Footer></Footer>
    </div>
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       <>
    //       </>
    //     }
    //   ></Route>
    // </Routes>
  );
};
