import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../App";
import { DarkModeToggle } from "../DarkModeToggle";
import { close } from "../../assets";
import styles from "./style.module.css";

interface IProps {
  onClose: () => void;
}

export const NavBar = ({ onClose }: IProps) => {
  const { isDark, setIsDark } = useContext(Context);

  const handleOnChange = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  return (
    <div className={`${styles.navBar} ${isDark ? styles.navBarDark : ""}`}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <button onClick={onClose} className={styles.close}>
            <img src={close} alt="close" className={styles.closeButton} />
          </button>

          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active_link : styles.noActive_link
                }
              >
                All posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? styles.active_link : styles.noActive_link
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  isActive ? styles.active_link : styles.noActive_link
                }
              >
                Registration
              </NavLink>
            </li>
          </ul>
        </div>
        <DarkModeToggle inputChecked={isDark} onChange={handleOnChange} />
      </div>
    </div>
  );
};
