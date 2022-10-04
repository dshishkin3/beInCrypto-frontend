import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";

import logo from "../../../../assets/logo.svg";
import Button from "../../button/Button";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <div className={styles.logo}>
            <Image alt="logo" src={logo} width={30} height={30} />
            <p>BeInCrypto</p>
          </div>
        </Link>
        <div className={styles.navItems}>
          <div className={styles.item}>
            <p>Crypto News</p>
            <IoMdArrowDropdown color="#848E9C" size={20} />
          </div>
          <div className={styles.item}>
            <p>Cryptocurrencies</p>
            <IoMdArrowDropdown color="#848E9C" size={20} />
          </div>
        </div>
      </div>
      <div>
        <Link href="/login">
          <p className={styles.login}>Log In</p>
        </Link>
        <Link href="/register">
          <Button margin="0px 26px 0px 0px">
            Register
          </Button>
        </Link>
        <p className={styles.language}>English</p>
        <p className={styles.сurrency}>USD</p>
        <div className={styles.theme}>
          <IoIosSunny color="#fff" size={22} />
        </div>
      </div>
    </div>
  );
};

export default Header;
