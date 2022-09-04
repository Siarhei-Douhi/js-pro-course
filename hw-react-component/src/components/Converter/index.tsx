import { ChangeEventHandler, useEffect, useState } from "react";
import { Input } from "../Input";
import style from "./style.module.css";

export const Converter = () => {
  let [dol, setDol] = useState("");
  let [byn, setByn] = useState("");

  const handleDollar: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDol(event.target.value);

    // byn = dol + "a";
    setByn((state) => (state = dol + "b"));
  };

  useEffect(() => {}, [dol]);

  const handleByn: ChangeEventHandler<HTMLInputElement> = (event) => {
    setByn(event.target.value);
    // dol = byn + "b";
  };
  return (
    <div>
      <Input value={dol} label="$" onChange={handleDollar} />
      <Input value={byn} label="BYN" onChange={handleByn} />
    </div>
  );
};
