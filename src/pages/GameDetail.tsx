import React from "react";
import { useSelector } from "react-redux";
import { CardAnimal } from "../components/cards/CardAnimal";
import { AppState } from "../store";
import { newsState } from "../store/news/newsTypes";

interface GameDetailProps {
  match: any;
}

export const GameDetail: React.FC<GameDetailProps> = ({ match }) => {
  const newsID = parseInt(match.params.id);

  const news = useSelector<AppState, newsState["news"]>(
    (state) => state.newsReducer.news
  );

  return (
    <>
      {news
        .filter((data) => data.id === newsID)
        .map((filteredData) => (
          <CardAnimal
            img={filteredData.image}
            title={filteredData.title}
            desc={filteredData.desc}
            key={filteredData.id}
            rating={filteredData.rating}
            path={filteredData.id}
            detailClass={"na-news-card-detail"}
          />
        ))}
    </>
  );
};
