import style from "./style.module.css";
import { ChangeEventHandler, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

export const RegisterForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleUser: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUser(event.target.value);
  };
  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirm: ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfirm(event.target.value);
  };
  const onclickLogin = () => {
    alert(`user:${user} email:${email} password:${password}`);
    setUser("");
    setEmail("");
    setPassword("");
    setConfirm("");
  };
  const login = (
    <a href="#" className={style.login}>
      login
    </a>
  );
  return (
    <div className={style.form}>
      <Input value={user} label="User Name" onChange={handleUser} />
      <Input value={email} label="Email" onChange={handleEmail} />
      <Input value={password} label="Password" onChange={handlePassword} />
      <Input
        value={confirm}
        label="Confirm Password"
        onChange={handleConfirm}
      />
      <div className={style.formBtn}>
        <Button text="Login" onClick={onclickLogin} type={"primary"} />
      </div>
      <p className={style.formTextUnderBtn}>
        {`If you have account, you can `}
        {login}
      </p>
    </div>
  );
};
