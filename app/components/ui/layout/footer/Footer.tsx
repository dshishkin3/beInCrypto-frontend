import Link from "next/link";
import React, { FC } from "react";

import Button from "../../button/Button";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <p className={styles.title}>About Us</p>
        <p className={styles.item}>About</p>
        <p className={styles.item}>Careers</p>
        <p className={styles.item}>Business Contacts</p>
        <p className={styles.item}>Community</p>
        <p className={styles.item}>Binance Blog</p>
        <p className={styles.item}>Terms</p>
        <p className={styles.item}>Privacy</p>
        <p className={styles.item}>Risk Warning</p>
      </div>
      <div className={styles.block}>
        <p className={styles.title}>Products</p>
        <p className={styles.item}>Exchange</p>
        <p className={styles.item}>Academy</p>
        <p className={styles.item}>Binance Live</p>
        <p className={styles.item}>Charity</p>
        <p className={styles.item}>Card</p>
        <p className={styles.item}>Labs</p>
        <p className={styles.item}>Launchpad</p>
        <p className={styles.item}>Research</p>
      </div>
      <div className={styles.block}>
        <p className={styles.title}>Service</p>
        <p className={styles.item}>Downloads</p>
        <p className={styles.item}>Desktop Application</p>
        <p className={styles.item}>Buy Crypto</p>
        <p className={styles.item}>Institutional & VIP Services</p>
        <p className={styles.item}>Referral</p>
        <p className={styles.item}>Execution Solutions</p>
        <p className={styles.item}>Affiliate</p>
        <p className={styles.item}>BNB</p>
      </div>
      <div className={styles.block}>
        <p className={styles.title}>Support</p>
        <p className={styles.item}>Give Us Feedback</p>
        <p className={styles.item}>Support Center</p>
        <p className={styles.item}>Submit a request</p>
        <p className={styles.item}>APIs</p>
        <p className={styles.item}>Fees</p>
      </div>
      <div className={styles.block}>
        <p className={styles.title}>Learn</p>
        <p className={styles.item}>Learn & Earn</p>
        <p className={styles.item}>Browse Crypto Prices</p>
        <p className={styles.item}>Buy BNB</p>
        <p className={styles.item}>Buy Bitcoin</p>
        <p className={styles.item}>Buy Ethereum</p>
        <p className={styles.item}>Buy Litecoin</p>
        <p className={styles.item}>Buy Ripple</p>
      </div>
      <div className={styles.block}>
        <p className={styles.title}>Be with BeInCrypto</p>
        <Link href="/register">
          <Button color="#000000" w={150} h={45}>
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
