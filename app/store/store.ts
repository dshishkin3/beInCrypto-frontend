import { makeAutoObservable } from "mobx";

class Cryptocurrencies {
  constructor() {
    makeAutoObservable(this);
  }
}

export default new Cryptocurrencies();
