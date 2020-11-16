import { NavLink } from "react-router-dom";

function MainTabs() {
  return (
    <div className="mainTabs">
      <ul className="mainTabs__nav">
        <li className="mainTabs__nav__item">
          <NavLink
            to="/home"
            className="mainTabs__nav__link"
            activeClassName="mainTabs__nav__link_active"
          >
            Главная
          </NavLink>
        </li>
        <li className="mainTabs__nav__item">
          <NavLink
            to="/news"
            className="mainTabs__nav__link"
            activeClassName="mainTabs__nav__link_active"
          >
            Новости
          </NavLink>
        </li>
        <li className="mainTabs__nav__item">
          <NavLink
            to="/login"
            className="mainTabs__nav__link"
            activeClassName="mainTabs__nav__link_active"
          >
            Авторизация
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainTabs;
