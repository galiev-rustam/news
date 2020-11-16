import { connect } from "react-redux";
import { allowNews } from "../redux/actions";
import ItemNews from "./ItemNews";
import AddNews from "./AddNews";

function News(props) {
  let ItemNewsMap = props.news.map((item) => (
    <ItemNews item={item} key={item.id} login={props.login} />
  ));
  let RenderNewsMap = props.renderNews.map((item) => (
    <ItemNews
      item={item}
      key={item.id}
      render={true}
      login={props.login}
      dispatch={props}
    />
  ));
  return (
    <div className="app__content__news">
      <p>Новости</p>
      <div style={{ display: props.login.authorized ? "block" : "none" }}>
        <AddNews />
      </div>
      {ItemNewsMap}
      <div
        className="content__news__render-news"
        style={{ display: props.login.authorized ? "block" : "none" }}
      >
        {RenderNewsMap}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    login: state.news.login,
    renderNews: state.news.renderNews,
  };
};

const mapDispatchToProps = {
  allowNews: allowNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
