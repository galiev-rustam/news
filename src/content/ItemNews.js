import React from "react";
import timeLogo from "../img/timeLogo.png";

class ItemNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  allowNews = () => {
    this.props.dispatch.allowNews(this.props.item);
  };

  render() {
    return (
      <div className="news__info">
        <img
          src={timeLogo}
          alt="time logo"
          className="news__info__time-logo"
          style={{ display: this.props.render ? "block" : "none" }}
        />
        <p className="news__info__name">{this.props.item.title}</p>
        <p className="news__info__date">{this.props.item.time}</p>
        <div className="news__info__text">{this.props.item.text}</div>
        <div
          className="news__info__allow-btn"
          style={{
            display:
              this.props.login.access && this.props.render ? "block" : "none",
          }}
        >
          <button onClick={this.allowNews}>Одобрить новость</button>
        </div>
      </div>
    );
  }
}

export default ItemNews;
