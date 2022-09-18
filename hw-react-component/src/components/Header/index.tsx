import { useState } from "react";
import { menu } from "../../assets";
import { NavBar } from "../NavBar";

import styles from "./style.module.css";

export const Header = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const openNavBar = () => {
    setIsNavBarVisible(true);
  };

  const closeNavBar = () => {
    setIsNavBarVisible(false);
  };

  return (
    <nav className={styles.header}>
      <button className={styles.menu} onClick={openNavBar}>
        <img src={menu} alt="menu" className={styles.menuButton} />
        <div className={styles.menuButton} />
      </button>

      {isNavBarVisible ? <NavBar onClose={closeNavBar} /> : null}
    </nav>
  );
};
