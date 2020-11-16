import { ALLOW, CREATE_NEWS, LOGIN, LOGOUT, RENDER } from "./types";
import { ADMIN, passwordAdmin, USER1, passwordUser1 } from "./users";

const initialState = {
  news: [
    {
      id: 0,
      title: "Москва",
      text:
        "Москва́ — столица России, город федерального значения, административный центр Центрального федерального округа и центр Московской области, в состав которой не входит.",
      time: "11/03/2020",
    },
    {
      id: 1,
      title: "Санкт-Петербург",
      text:
        "Санкт-Петербу́рг — второй по численности населения город России[9]. Город федерального значения. Административный центр Северо-Западного федерального округа и Ленинградской области. Административный центр Северо-Западного федерального округа и Ленинградской области. Основан 16 (27) мая 1703 года царём Петром I. В 1712—1918 годах являлся столицей Российского государства.",
      time: "08/09/2020",
    },
  ],
  renderNews: [],
  login: {
    authorized: false,
    access: false,
    user: null,
    error: false,
  },
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEWS:
      return { ...state, news: state.news.concat([action.payload]) };
    case RENDER:
      return {
        ...state,
        renderNews: state.renderNews.concat([action.payload]),
      };
    case ALLOW:
      let newRenderNews = state.renderNews.filter(
        (item) => item !== action.payload
      );
      return {
        ...state,
        renderNews: newRenderNews,
        news: state.news.concat([action.payload]),
      };
    case LOGIN:
      if (
        action.payload.login === ADMIN &&
        action.payload.password === passwordAdmin
      ) {
        return {
          ...state,
          login: {
            authorized: true,
            access: true,
            user: action.payload.login,
            error: null,
          },
        };
      } else if (
        action.payload.login === USER1 &&
        action.payload.password === passwordUser1
      ) {
        return {
          ...state,
          login: {
            authorized: true,
            access: false,
            user: action.payload.login,
            error: false,
          },
        };
      } else {
        console.log("ERROR");
        return {
          ...state,
          login: { authorized: false, access: false, user: null, error: true },
        };
      }
    case LOGOUT:
      return {
        ...state,
        login: { authorized: false, access: false, user: null, error: false },
      };
    default:
      return state;
  }
};
