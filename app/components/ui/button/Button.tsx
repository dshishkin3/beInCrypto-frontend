import React, { ReactNode } from "react";

import styles from "./Button.module.scss";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  onClick?: () => void;
  color?: string;
  w: number;
  h: number;
  margin?: string;
}

const Button = ({
  children,
  onClick,
  color,
  w,
  h,
  margin,
}: IButtonProps): JSX.Element => {
  return (
    <button
      style={{ color: color, height: h, width: w, margin: margin }}
      onClick={onClick}
      className={styles.container}
    >
      {children}
    </button>
  );
};

export default Button;
