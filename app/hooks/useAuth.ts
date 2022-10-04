import axios, { AxiosResponse } from "axios";

import { LOGIN_URL, REGISTER_URL } from "../utils/constants";
import { getItem, saveToken } from "../utils/token";
import auth from "../store/auth";

interface ILogin {
  email: string;
  password: string;
}

interface IRegister {
  username: string;
  email: string;
  password: string;
}

const getConfig = (url: string, data: ILogin) => ({
  method: "post",
  url: url,
  data: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
});

const middleware = (data: AxiosResponse) => {
  if (data.status !== 201) throw new Error();
  return data;
};

const axiosHandle = (data: AxiosResponse) => {
  auth.updateUser(data.data);
  saveToken(data.data.password);
};

export const useAuth = () => {
  const checkAuth = () => {
    auth.updateAuth(!!getItem());
  };

  const login = (data: ILogin) => {
    if (auth.isAuth) return;
    axios(getConfig(LOGIN_URL, data)).then(middleware).then(axiosHandle);
  };

  const register = (data: IRegister) => {
    if (auth.isAuth) return;
    axios(getConfig(REGISTER_URL, data)).then(middleware).then(axiosHandle);
  };
  
  return { login, register, checkAuth };
};
