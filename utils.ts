export const storage = {
  getAccessToken: () => JSON.parse(window.localStorage.getItem('AccessToken')),
  getRefreshToken: () =>
    JSON.parse(window.localStorage.getItem('RefreshToken')),
  setAccessToken: (token) =>
    window.localStorage.setItem('AccessToken', JSON.stringify(token)),
  setRefreshToken: (token) =>
    window.localStorage.setItem('RefreshToken', JSON.stringify(token)),
  clearToken: () => {
    window.localStorage.removeItem('AccessToken');
    window.localStorage.removeItem('RefreshToken');
  },
};
