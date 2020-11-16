import React from "react";
import { connect } from "react-redux";
import { logIn } from "../redux/actions";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      emptyForm: "",
    };
  }

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (this.state.login === "" || this.state.password === "") {
      this.setState({ emptyForm: "Вы не ввели логин или пароль" });
      return;
    }
    const data = {
      login: this.state.login,
      password: this.state.password,
    };
    this.props.logIn(data);
    this.setState({ login: "", password: "", emptyForm: "" });
  };
  render() {
    return (
      <form className="login-form" onSubmit={this.submitHandler}>
        <div className="login-form__content">
          <label className="login-form__login-label" htmlFor="login">
            Введите логин
          </label>
          <input
            className="login-form__input"
            id="login"
            name="login"
            value={this.state.login}
            onChange={this.changeInputHandler}
          />

          <label className="login-form__password-label" htmlFor="password">
            Введите пароль
          </label>
          <input
            className="login-form__input"
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.changeInputHandler}
          />
          <button type="submit" className="login-form__btn-submit">
            Войти
          </button>
          <div
            className="login-form__content__error"
            style={{ display: this.props.login.error ? "block" : "none" }}
          >
            Неправильный логин или пароль, попробуйте снова
          </div>
          <p>{this.state.emptyForm}</p>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  logIn,
};

const mapStateToProps = (state) => {
  return {
    login: state.news.login,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
