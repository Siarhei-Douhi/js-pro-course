import style from "./style.module.css";
import { ChangeEventHandler, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { TextForm } from "../TextForm";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const onclickLogin = () => {
    alert(` email:${email} password:${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div className={style.form}>
      <Input value={email} label="Email" onChange={handleEmail} />
      <Input value={password} label="Password" onChange={handlePassword} />
      <div className={style.formBtn}>
        <Button text="Login" onClick={onclickLogin} type={"primary"} />
      </div>
      <TextForm>
        Forgot your password? <a href="#">Reset password</a>
      </TextForm>
    </div>
  );
};
