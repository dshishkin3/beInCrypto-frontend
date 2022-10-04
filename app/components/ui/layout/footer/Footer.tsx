import Link from "next/link";
import React, { FC } from "react";

import Button from "../../button/Button";

import { aboutUs, learn, products, service, support } from "./data";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.container}>
      {/* <- about us -> */}
      <div className={styles.block}>
        <p className={styles.title}>About Us</p>
        {aboutUs.map((item) => (
          <p className={styles.item} key={item.id}>
            {item.name}
          </p>
        ))}
      </div>
      {/* <- products -> */}
      <div className={styles.block}>
        <p className={styles.title}>Products</p>
        {products.map((item) => (
          <p className={styles.item} key={item.id}>
            {item.name}
          </p>
        ))}
      </div>
      {/* <- service -> */}
      <div className={styles.block}>
        <p className={styles.title}>Service</p>
        {service.map((item) => (
          <p className={styles.item} key={item.id}>
            {item.name}
          </p>
        ))}
      </div>
      {/* <- support -> */}
      <div className={styles.block}>
        <p className={styles.title}>Support</p>
        {support.map((item) => (
          <p className={styles.item} key={item.id}>
            {item.name}
          </p>
        ))}
      </div>
      {/* <- learn -> */}
      <div className={styles.block}>
        <p className={styles.title}>Learn</p>
        {learn.map((item) => (
          <p className={styles.item} key={item.id}>
            {item.name}
          </p>
        ))}
      </div>
      <div className={styles.block}>
        <p className={styles.title}>Be with BeInCrypto</p>
        <Link href="/register">
          <Button color="#414141" w={150} h={45}>
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
