import React, { ReactNode } from "react";

import styles from "./Title.module.scss";

export interface ITitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: number | string;
  margin?: string;
}

const Title = ({ children, size, margin }: ITitleProps): JSX.Element => {
  return (
    <h1 style={{ margin: margin, fontSize: size }} className={styles.container}>
      {children}
    </h1>
  );
};

export default Title;
