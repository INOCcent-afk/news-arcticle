import React from "react";
import "../../assets/scss/Nav.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import { newsState } from "../../store/news/newsTypes";

const Nav = () => {
  const news = useSelector<AppState, newsState["news"]>(
    (state) => state.newsReducer.news
  );

  return (
    <header>
      <h1>CURRENT NEWS: {news.length}</h1>
      <ul className="nav_links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
