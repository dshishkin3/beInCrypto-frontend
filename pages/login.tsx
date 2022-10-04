import { NextPage } from "next";
import React from "react";

import Head from "next/head";

import LoginPage from "../app/components/screens/login-page/LoginPage";
import { ProtectedRoute } from "../app/components/protected-route/ProtectedRoute";

const login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Log In</title>
        <meta name="description" content="Log In" />
      </Head>
      <ProtectedRoute mustAuth={false}>
        <LoginPage />
      </ProtectedRoute>
    </>
  );
};

export default login;
