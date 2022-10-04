import { makeAutoObservable } from "mobx";

class Auth {
  isLoaded = false;
  isAuth = false;
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  updateAuth(auth: boolean) {
    this.isAuth = auth;
    this.isLoaded = true;
  }

  updateUser(data: any) {
    this.isLoaded = true;
    this.user = data;
    this.isAuth = true;
  }
}

export default new Auth();
