import { useRef, useState, useContext } from "react";
import { menu } from "../../assets";
import { NavBar } from "../NavBar";
import { Context } from "../../App";

import styles from "./style.module.css";
import { UserCard } from "../UserCard";

export const Header = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const [statusNavBar, setStatusNavBar] = useState(false);
  // const statusNavBarRef = useRef<boolean>(false);
  const { user } = useContext(Context);

  const openNavBar = () => {
    // statusNavBarRef.current = false;
    setIsNavBarVisible(true);
    setStatusNavBar(false);
  };

  const closeNavBar = () => {
    // statusNavBarRef.current = true;
    setStatusNavBar(true);
    setTimeout(() => {
      setIsNavBarVisible(false);
    }, 1500);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.buttonWrap}>
        <button className={styles.menu} onClick={openNavBar}>
          <img src={menu} alt="menu" className={styles.menuButton} />
          <div className={styles.menuButton} />
        </button>
        {user ? <UserCard userName={user?.username} isDark={false} /> : null}
      </div>

      {isNavBarVisible ? (
        <NavBar
          onClose={closeNavBar}
          className={`${statusNavBar ? styles.closeNavBar : ""}`}
          // className={`${statusNavBarRef.current ? styles.closeNavBar : ""}`}
        />
      ) : null}
    </nav>
  );
};
