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
  tag?: "h1" | "h2" | "h3";
}

const Title = ({ tag, children, size, margin }: ITitleProps): JSX.Element => {
  const Tag = tag || "h1";
  return (
    <Tag style={{ margin: margin, fontSize: size }} className={styles.container}>
      {children}
    </Tag>
  );
};

export default Title;
