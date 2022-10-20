import React, { forwardRef, ReactNode } from "react";

import styles from "./Button.module.scss";

export interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  margin?: string;
  variant?: "primary" | "secondary" | "pagination" | "pagination-active";
  type?: "submit" | "reset" | "button";
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    children,
    onClick,
    margin,
    variant = "primary",
    type = "button",
  } = props;
  return (
    <button
      type={type}
      style={{ margin: margin }}
      onClick={onClick}
      className={styles[variant]}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;


