import Image from "next/image";
import React, { FC } from "react";

import { ICryptocurrency } from "../../shared/interfaces/cryptocurrency.types";
import Title from "../../ui/title/Title";

import Categories from "./categories/Categories";
import Cryptocurrency from "./cryptocurrency/Cryptocurrency";

import styles from "./Home.module.scss";

interface IHomeProps {
  cryptocurrencies: ICryptocurrency[];
}

const Home: FC<IHomeProps> = ({ cryptocurrencies }) => {
  return (
    <div className={styles.container}>
      <Title>Markets</Title>
      <Categories />
      {cryptocurrencies.map((crypto) => (
        <Cryptocurrency crypto={crypto} key={crypto.uuid} />
      ))}
    </div>
  );
};

export default Home;
