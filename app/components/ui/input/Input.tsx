import React, { FC } from "react";

import styles from "./Input.module.scss";

export const Input: FC<any> = ({
  children,
  type = "text",
  name,
  value,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>{children}</span>
      <input
        name={name}
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
