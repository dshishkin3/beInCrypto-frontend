import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { IoMdArrowDropup } from "react-icons/io";

import { ICryptocurrency } from "../../../shared/interfaces/cryptocurrency.types";

import styles from "./Cryptocurrency.module.scss";

interface ICryptocurrencyProps {
  crypto: ICryptocurrency;
  i: number;
}

const Cryptocurrency: FC<ICryptocurrencyProps> = ({ crypto, i }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <AiOutlineStar size={26} className={styles.star} />
        <p className={styles.index}>{i + 1}</p>
        <Image src={crypto.iconUrl} height={30} width={30} alt="crypto icon" />
        <p className={styles.name}>
          {crypto.name} <b>{crypto.symbol}</b>
        </p>
      </div>
      <b
        className={styles.price}
        style={{
          color: crypto.change.slice(0, 1) === "-" ? "#F6465D" : "#0ECB81",
        }}
        color={crypto.change.slice(0, 1) === "-" ? "#F6465D" : "#0ECB81"}
      >
        ${crypto.price.slice(0, 7)}
      </b>
      <div className={styles.change}>
        <IoMdArrowDropup
          size={22}
          color={crypto.change.slice(0, 1) === "-" ? "#F6465D" : "#0ECB81"}
          style={{
            transform:
              crypto.change.slice(0, 1) === "-" ? "rotate(180deg)" : "",
          }}
        />
        <b>
          {crypto.change.slice(0, 1) === "-"
            ? crypto.change.slice(1, 6)
            : crypto.change}
        </b>
      </div>
      <b className={styles.volume}>${crypto["24hVolume"]}</b>
      <b className={styles.marketCap}>${crypto.marketCap}</b>
      <b className={styles.detail}>Detail</b>
    </div>
  );
};

export default Cryptocurrency;
