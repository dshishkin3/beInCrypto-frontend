import React, { FC } from "react";

import Title from "../../ui/title/Title";

import Categories from "./categories/Categories";
import Cryptocurrencies from "./cryptocurrencies/Cryptocurrencies";

import styles from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Title>Markets</Title>
      <Categories />
      <Cryptocurrencies />
    </div>
  );
};

export default Home;
