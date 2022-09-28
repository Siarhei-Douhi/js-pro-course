import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { DarkModeToggle } from "../DarkModeToggle";
import { close } from "../../assets";
import styles from "./style.module.css";
import { Button } from "../Button";

interface IProps {
  onClose: () => void;
  className?: string;
}

export const NavBar = ({ onClose, className }: IProps) => {
  const { isDark, setIsDark, user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleOnChange = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  const logout = () => {
    navigate("/");
    setUser(null);

    localStorage.clear();
  };

  return (
    <div
      className={`${styles.navBar} ${
        isDark ? styles.navBarDark : ""
      } ${className}`}
    >
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <button onClick={onClose} className={styles.close}>
            <img src={close} alt="close" className={styles.closeButton} />
          </button>

          <ul>
            {user ? (
              <>
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
                    to="/myposts"
                    className={({ isActive }) =>
                      isActive ? styles.active_link : styles.noActive_link
                    }
                  >
                    My posts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/add-post"
                    className={({ isActive }) =>
                      isActive ? styles.active_link : styles.noActive_link
                    }
                  >
                    +Add posts
                  </NavLink>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
        {user ? (
          <Button
            text="Log out"
            onClick={logout}
            className={styles.buttonLogOut}
            type="secondary2"
          />
        ) : null}
        <DarkModeToggle inputChecked={isDark} onChange={handleOnChange} />
      </div>
    </div>
  );
};
