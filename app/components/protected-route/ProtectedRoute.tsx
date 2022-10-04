import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";

import React, { useEffect } from "react";

import { useAuth } from "../../hooks/useAuth";
import auth from "../../store/auth";

interface IProtectedRoute {
  children: JSX.Element;
  mustAuth?: boolean;
}
// это проверка на авторизованность
// если он авторизован, то тогда отрисовываем нужную нам страницу
// иначе перенаправляем
export const ProtectedRoute = observer(
  ({ children, mustAuth = true }: IProtectedRoute): JSX.Element => {
    const router = useRouter();

    const { checkAuth } = useAuth();

    const { isLoaded, isAuth } = auth;

    useEffect(() => {
      checkAuth();
    }, [checkAuth]);

    useEffect(() => {
      if (isLoaded && isAuth && !mustAuth) {
        router.push("/");
      }
      if (isLoaded && !isAuth && mustAuth) {
        router.push("/login");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth, isLoaded, mustAuth]);

    if (!isLoaded) return <div>Loading...</div>;

    // если пользователь авторизован а, а не должен
    if (isLoaded && isAuth && !mustAuth) {
      return <div>Redirecting...</div>;
    }

    // наоборот
    if (isLoaded && !isAuth && mustAuth) {
      return <div>Redirecting...</div>;
    }
    return children;
  }
);
