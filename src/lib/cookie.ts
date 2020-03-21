import Cookie from 'js-cookie';

const setCookieInLocalStorage = (cookie: string) => {
  localStorage.removeItem('user');
  localStorage.setItem('user', cookie);
};

export const getCookie = () => {
  const result = Cookie.get();
  setCookieInLocalStorage(JSON.stringify(result));
};
