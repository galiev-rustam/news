import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { logOut } from "../redux/actions";

function Login(props) {
  if (props.login.authorized) {
    return (
      <div className="log-out">
        <p>Вы успешно авторизовались под логином {props.login.user}</p>
        <button className="log-out__btn-logout" onClick={() => props.logOut()}>
          Выйти
        </button>
      </div>
    );
  }
  return (
    <div className="Login">
      <LoginForm />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.news.login,
  };
};

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
