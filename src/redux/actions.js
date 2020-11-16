import { CREATE_NEWS, LOGIN, LOGOUT, RENDER, ALLOW } from "./types";

export function createNews(news) {
  return {
    type: CREATE_NEWS,
    payload: news,
  };
}

export function renderNews(news) {
  return {
    type: RENDER,
    payload: news,
  };
}

export function allowNews(data) {
  return {
    type: ALLOW,
    payload: data,
  };
}

export function logIn(data) {
  return {
    type: LOGIN,
    payload: data,
  };
}

export function logOut() {
  return {
    type: LOGOUT,
  };
}
