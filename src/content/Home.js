import { connect } from "react-redux";

function Home(props) {
  let nameOfUser = "Гость";
  if (props.login.user) {
    nameOfUser = props.login.user;
  }
  return (
    <div className="app__content__home">
      <p>Привет, {nameOfUser}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.news.login,
  };
};

export default connect(mapStateToProps, null)(Home);
