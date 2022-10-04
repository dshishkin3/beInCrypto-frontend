import React, { ChangeEvent, FormEvent, useState } from "react";

import { useAuth } from "../../../hooks/useAuth";

import AuthPageTemplate from "../../auth-page-template/AuthPageTemplate";
import { AdditionalAction } from "../../ui/additional-action/AdditionalAction";
import { Input } from "../../ui/input/Input";

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const changeHander = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { login } = useAuth();

  const submitHander = (e: FormEvent) => {
    e.preventDefault();
    login(values);
  };

  return (
    <div>
      <AuthPageTemplate
        title="Account login"
        onSubmit={submitHander}
        buttonText="Log In"
        additionalAction={
          <AdditionalAction actionText="Register Now" to="/register">
            Don’t have an account?
          </AdditionalAction>
        }
      >
        <Input
          name="email"
          type="email"
          onChange={changeHander}
          value={values.email}
        >
          Personal Email
        </Input>
        <Input
          name="password"
          type="password"
          onChange={changeHander}
          value={values.password}
        >
          Password
        </Input>
      </AuthPageTemplate>
    </div>
  );
};

export default LoginPage;
