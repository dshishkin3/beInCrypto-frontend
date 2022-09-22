import React, { FC, ReactNode } from "react";

import Footer from "./footer/Footer";
import Header from "./header/Header";

import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
