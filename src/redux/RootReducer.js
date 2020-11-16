import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";

export const RootReducer = combineReducers({
  news: newsReducer,
});
