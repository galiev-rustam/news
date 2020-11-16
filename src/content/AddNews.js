import React from "react";
import { connect } from "react-redux";
import { createNews, renderNews } from "../redux/actions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      error: "",
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
    if (this.state.title === "" || this.state.text === "") {
      this.setState({
        error: "Вероятно вы забыли ввести заголовок или текст новости",
      });
      return;
    }
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    const addNews = {
      id: Date.now().toString(),
      title: this.state.title,
      text: this.state.text,
      time: today,
    };

    this.props.login.access
      ? this.props.createNews(addNews)
      : this.props.renderNews(addNews);

    this.setState({ title: "", text: "", error: "" });
  };

  render() {
    return (
      <div className="app__content__news__AddNews">
        <form className="AddNews-form" onSubmit={this.submitHandler}>
          <div className="AddNews-form__content">
            <label className="AddNews-form__title-label" htmlFor="title">
              Заголовок новости
            </label>
            <input
              className="AddNews-form__input"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.changeInputHandler}
            />
            <label className="AddNews-form__text-label" htmlFor="text">
              Текст новости
            </label>
            <input
              className="AddNews-form__input"
              id="text"
              name="text"
              value={this.state.text}
              onChange={this.changeInputHandler}
            />
            <button type="submit" className="AddNews-form__content__btn-submit">
              Загрузить новость
            </button>
            <p>{this.state.error}</p>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createNews,
  renderNews,
};

const mapStateToProps = (state) => {
  return {
    login: state.news.login,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
