import Token from "./jwt";

export const getToken = () => {
  return window.localStorage.getItem(Token);
};

export const saveToken = token => {
  window.localStorage.setItem(Token, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(Token);
};

export default { getToken, saveToken, destroyToken };
