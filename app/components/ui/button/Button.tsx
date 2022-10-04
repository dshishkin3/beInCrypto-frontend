import React, { FC, ReactNode } from "react";

import styles from "./Button.module.scss";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  onClick?: () => void;
  margin?: string;
  variant?: "primary" | "secondary";
  type?: "submit" | "reset" | "button" | undefined;
}

const Button: FC<IButtonProps> = ({
  children,
  onClick,
  margin,
  variant = "primary",
  type = "button",
}): JSX.Element => {
  return (
    <button
      type={type}
      style={{ margin: margin }}
      onClick={onClick}
      className={styles[variant]}
    >
      {children}
    </button>
  );
};

export default Button;
