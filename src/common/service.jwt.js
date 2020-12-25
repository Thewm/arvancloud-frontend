const TOKEN = "token";

export const getToken = () => {
  return window.localStorage.getItem(TOKEN);
};

export const saveToken = token => {
  window.localStorage.setItem(TOKEN, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(TOKEN);
};

export default { getToken, saveToken, destroyToken };
