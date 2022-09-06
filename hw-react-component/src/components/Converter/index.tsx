import { ChangeEventHandler, useEffect, useState } from "react";
import { Input } from "../Input";
import style from "./style.module.css";

export const Converter = () => {
  const [byn, setByn] = useState("");
  const [usd, setUsd] = useState("");
  const [activeRate, setActiveRate] = useState(0);

  useEffect(() => {
    const promise = fetch("https://www.nbrb.by/api/exrates/rates/431");

    promise
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        setActiveRate(value.Cur_OfficialRate);
      });
  }, []);

  useEffect(() => {
    const num = +byn;

    if (!isNaN(num) && activeRate !== 0) {
      setUsd(String(num / activeRate));
    }
  }, [byn]);

  useEffect(() => {
    const num = +usd;

    if (!isNaN(num) && activeRate !== 0) {
      setByn(String(num * activeRate));
    }
  }, [usd]);

  const handleByn: ChangeEventHandler<HTMLInputElement> = (event) => {
    const num = Number(event.target.value);

    if (!isNaN(num)) {
      setByn(event.target.value);
    }
  };

  const handleUsd: ChangeEventHandler<HTMLInputElement> = (event) => {
    const num = Number(event.target.value);

    if (!isNaN(num)) {
      setUsd(event.target.value);
    }
  };

  return (
    <div>
      <h1>Live currency converter</h1>
      <Input value={usd} onChange={handleUsd} label="Enter currency in USD:" />
      <Input value={byn} onChange={handleByn} label="Enter currency in BYN:" />
    </div>
  );
};
