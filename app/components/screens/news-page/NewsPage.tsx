/* eslint-disable max-len */
/* eslint-disable quotes */
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

import news from "../../../store/news";

import Title from "../../ui/title/Title";
import Wrapper from "../../ui/wrapper/Wrapper";

import { NewsCard } from "./news-card/NewsCard";
import { Pagination } from "./pagination/Pagination";

import styles from "./NewsPage.module.scss";

const NewsPage = observer(() => {
  useEffect(() => {
    news.request();
  }, []);
  if (!news.isLoaded) return null;
  return (
    <Wrapper>
      <main className={styles.main}>
        <section className={styles.titleWrapper}>
          <Title>Latest Crypto News</Title>
        </section>
        <ul className={styles.newsCards}>
          {news.viewNews.map((n: any) => {
            return <NewsCard key={n.hash} newsData={n} />;
          })}
        </ul>
        <section className={styles.paginationWrapper}>
          <Pagination />
        </section>
      </main>
    </Wrapper>
  );
});

export default NewsPage;
