import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose } from "redux";
import { createStore } from "redux";
import { RootReducer } from "./redux/RootReducer";
import "./index.css";
import App from "./App";

const store = createStore(
  RootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
