import React from "react";
import { observer } from "mobx-react-lite";

import Button from "../../../ui/button/Button";
import styles from "../NewsPage.module.scss";
import news from "../../../../store/news";
import { PrevPaginationIcon } from "../../../ui/icons/PrevPaginationIcon";
import { NextPaginationIcon } from "../../../ui/icons/NextPaginationIcon";

export const Pagination = observer(() => {
  const buttons = Array(news.totalPages)
    .fill(null)
    .map((b, i) => {
      const variant =
        news.currentPage === i + 1 ? "pagination-active" : "pagination";
      return (
        <Button
          onClick={() => news.changeCurrentPage(i + 1)}
          variant={variant}
          key={i}
        >
          {i + 1}
        </Button>
      );
    });

  return (
    <ul className={styles.pagination}>
      <li>
        <Button variant="pagination" onClick={news.goPrevPage}>
          <PrevPaginationIcon />
        </Button>
      </li>
      {buttons}
      <li>
        <Button onClick={news.goNextPage} variant="pagination">
          <NextPaginationIcon />
        </Button>
      </li>
    </ul>
  );
});
