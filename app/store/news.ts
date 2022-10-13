import axios from "axios";
import {
  action,
  autorun,
  makeAutoObservable,
} from "mobx";

import { getNews } from "../components/shared/axios/options";

class News {
  isLoaded = false;
  news: any = null;
  viewNews: any = null;
  totalPages = 1;
  currentPage = 1;
  newsOnPage = 3;
  totalNews = 1;

  constructor() {
    makeAutoObservable(this);
  }

  request = () => {
    axios.request(getNews).then(
      action("success", (res) => {
        this.isLoaded = true;
        this.news = res.data.data[0].screen_data.news;
        this.totalNews = res.data.data[0].screen_data.news.length;
      })
    );
  };

  changeCurrentPage = (page: number) => {
    this.currentPage = page;
  };
  goNextPage = () => {
    if (this.currentPage >= Math.ceil(this.totalNews / this.newsOnPage)) return;
    this.currentPage += 1;
  };
  goPrevPage = action(() => {
    if (this.currentPage <= 1) return;
    this.currentPage -= 1;
  });
}

const instance = new News();

autorun(() => {
  if (!instance.news) return;
  instance.totalPages = Math.ceil(instance.totalNews/ instance.newsOnPage);
  const index = instance.currentPage * instance.newsOnPage;
  instance.viewNews = instance.news.slice(index - 3, index);
});

export default instance;
