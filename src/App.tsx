import { useState } from "react";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainLayout } from "./components/MainLayout/MainLayout";

import styles from "./styles/app.module.css";

export const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.appContainer}>
      <Header isActive={isActive} setIsActive={setIsActive} />
      <MainLayout isActive={isActive} setIsActive={setIsActive} />
      <Footer />
    </div>
  );
};
