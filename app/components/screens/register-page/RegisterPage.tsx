import React, { ChangeEvent, FormEvent, useState } from "react";

import { useAuth } from "../../../hooks/useAuth";

import AuthPageTemplate from "../../auth-page-template/AuthPageTemplate";
import { AdditionalAction } from "../../ui/additional-action/AdditionalAction";
import { Input } from "../../ui/input/Input";

const RegisterPage = () => {
  const {register} = useAuth();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHander = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHander = (e: FormEvent) => {
    e.preventDefault();
    register(values);
  };
  return (
    <div>
      <AuthPageTemplate
        title="Create Personal Account"
        onSubmit={submitHander}
        buttonText="Create Personal Account"
        additionalAction={
          <AdditionalAction actionText="Login Now" to="/login">
            Already have an account?
          </AdditionalAction>
        }
      >
        <Input
          name="username"
          type="text"
          onChange={changeHander}
          value={values.username}
        >
          Username
        </Input>
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

export default RegisterPage;
