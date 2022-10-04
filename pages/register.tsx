import React from "react";

import { NextPage } from "next";

import Head from "next/head";

import RegisterPage from "../app/components/screens/register-page/RegisterPage";
import { ProtectedRoute } from "../app/components/protected-route/ProtectedRoute";

const register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register" />
      </Head>
      <ProtectedRoute mustAuth={false}>
        <RegisterPage />
      </ProtectedRoute>
    </>
  );
};

export default register;
