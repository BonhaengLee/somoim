import { storage } from './utils';

interface AuthResponse {
  user: User;
  jwt: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}

const API_URL = 'http://3.34.235.190:8080';

export async function handleApiResponse(response) {
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
}

// userprofile 넘어오는 유저 데이터 없음, jwt로 임시
export async function getUserProfile() {
  return await fetch(`${API_URL}/user/logIn`, {
    headers: {
      // Authorization: storage.getToken()
      'Content-Type': 'application/json', // 없던 것
    },
  }).then(handleApiResponse);
}

export async function loginWithIdAndPassword(data): Promise<AuthResponse> {
  return window
    .fetch(`${API_URL}/user/logIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, // 헤더 추가
      body: JSON.stringify(data),
    })
    .then(handleApiResponse);
}

export async function registerWithEmailAndPassword(data): Promise<AuthResponse> {
  return window
    .fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
    .then(handleApiResponse);
}
