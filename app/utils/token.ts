// всякие манипуляции с токенами

export const saveToken = (token: string) => {
  window.localStorage.setItem("token", token);
};

export const removeToken = () => {
  window.localStorage.removeItem("token");
};

export const getItem = () => {
  return window.localStorage.getItem("token");
};
