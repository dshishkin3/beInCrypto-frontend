import React, { FC, ReactNode } from "react";

import styles from "./Wrapper.module.scss";

interface IWrapperProps {
  children: ReactNode;
}

const Wrapper: FC<IWrapperProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Wrapper;
