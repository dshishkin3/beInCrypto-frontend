import React from "react";

import { NextPage } from "next";

import Head from "next/head";

import NewsPage from "../app/components/screens/news-page/NewsPage";

const news: NextPage = () => {
  return (
    <>
      <Head>
        <title>News</title>
        <meta name="description" content="News" />
      </Head>
      <NewsPage />
    </>
  );
};

export default news;
