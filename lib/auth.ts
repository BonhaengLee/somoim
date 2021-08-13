import { initReactQueryAuth } from 'react-query-auth';
import {
  // getUserProfile,
  registerWithEmailAndPassword,
  loginWithIdAndPassword,
  User,
} from '../api';
import { storage } from '../utils';

export async function handleUserResponse(data) {
  // const { jwt, user } = data;
  const { RefreshToken, AccessToken } = data;
  // storage.setToken(jwt);
  console.log('handleUserResponse', data);

  storage.setRefreshToken(RefreshToken);
  storage.setAccessToken(AccessToken);

  const user = RefreshToken; // token을 유저프로필로 임시로 사용
  return user;
}
// * : 유저의 아이디(정보)를 불러와 저장(현재 없음)
async function loadUser() {
  let user = null;

  // if (storage.getToken()) {
  if (storage.getAccessToken()) {
    // const data = await getUserProfile();
    const data = await storage.getAccessToken(); //localStorage.getItem('token') as string,
    // console.log('loadUser', data);
    user = data;
  }
  return user;
}

async function loginFn(data) {
  console.log('loginFn', data);

  const response = await loginWithIdAndPassword(data);
  console.log('resp', response);

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
