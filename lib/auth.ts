import { initReactQueryAuth } from 'react-query-auth';
import { getUserProfile, registerWithEmailAndPassword, loginWithIdAndPassword, User } from '../api';
import { storage } from '../utils';

export async function handleUserResponse(data) {
  // const { jwt, user } = data;
  const { RefreshToken, AccessToken } = data;
  // storage.setToken(jwt);
  storage.setRefreshToken(RefreshToken);
  storage.setAccessToken(AccessToken);

  const user = RefreshToken; // token을 유저프로필로 임시로 사용
  return user;
}

async function loadUser() {
  let user = null;

  // if (storage.getToken()) {
  if (storage.getAccessToken()) {
    const data = await getUserProfile();
    console.log('loadUser', data);
    user = data;
  }
  return user;
}

async function loginFn(data) {
  const response = await loginWithIdAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response); // * : 회원가입시 바로 로그인이면 jwt 필요
  return user;
}

async function logoutFn() {
  await storage.clearToken();
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
};

const { AuthProvider, useAuth } = initReactQueryAuth<User>(authConfig);

export { AuthProvider, useAuth };
