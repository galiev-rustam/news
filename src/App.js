import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import MainTabs from "./MainTabs";
import Home from "./content/Home";
import News from "./content/News";
import Login from "./content/Login";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <MainTabs />
        <div className="app__content">
          <Route path="/home" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
