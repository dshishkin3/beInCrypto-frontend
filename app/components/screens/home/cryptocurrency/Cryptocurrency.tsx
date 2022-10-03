import Image from "next/image";
import React, { FC } from "react";

import { ICryptocurrency } from "../../../shared/interfaces/cryptocurrency.types";

import styles from "./Cryptocurrency.module.scss";

interface ICryptocurrencyProps {
  crypto: ICryptocurrency;
}

const Cryptocurrency: FC<ICryptocurrencyProps> = ({ crypto }) => {
  return (
    <div className={styles.container}>
      <Image src={crypto.iconUrl} height={24} width={24} alt="crypto icon" />
      <p>{crypto.name}</p>
    </div>
  );
};

export default Cryptocurrency;
