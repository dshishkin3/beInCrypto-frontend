import React, { FC } from "react";

import { ICryptocurrency } from "../../shared/interfaces/cryptocurrency.types";
import Title from "../../ui/title/Title";
import Wrapper from "../../ui/wrapper/Wrapper";

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
      {/* <- all crypto block -> */}
      <Wrapper>
        <div className={styles.captions}>
          <div className={styles.title}>
            <p className={styles.index}>#</p>
            <p>Name</p>
          </div>
          <p>Price</p>
          <p>1h %</p>
          <p>Volume(24h)</p>
          <p>Market Cap</p>
        </div>
        {cryptocurrencies.map((crypto, i) => (
          <Cryptocurrency crypto={crypto} key={crypto.uuid} i={i} />
        ))}
      </Wrapper>
    </div>
  );
};

export default Home;
