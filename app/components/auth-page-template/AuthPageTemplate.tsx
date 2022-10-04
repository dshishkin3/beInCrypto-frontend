import React, { FC, FormEventHandler } from "react";

import Button from "../ui/button/Button";
import Title from "../ui/title/Title";

import styles from "./AuthPageTemplate.module.css";

interface ITemplate {
  children: any;
  additionalAction: JSX.Element;
  buttonText: string;
  onSubmit: FormEventHandler;
  title: string;
}

// это шаблон для отрисовки станиц с формой, типа авторизации

const AuthPageTemplate: FC<ITemplate> = ({
  children,
  additionalAction,
  buttonText,
  onSubmit,
  title = "",
}) => {
  return (
    <>
      <Title size={32} margin={"var(--x16) 0 var(--x11) 0"}>
        {title}
      </Title>
      <form id="register-form" onSubmit={onSubmit} className={styles.form}>
        <section className={styles.inputs}>{children}</section>
        <section className={styles.bottom}>
          <Button type="submit">{buttonText}</Button>
          {additionalAction}
        </section>
      </form>
    </>
  );
};

export default AuthPageTemplate;
