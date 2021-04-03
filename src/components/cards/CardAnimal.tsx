import React from "react";
import "../../assets/scss/cards.scss";
import { Link } from "react-router-dom";

interface CardAnimalProps {
  img: string;
  title: string;
  desc: string;
  rating: string;
  path: number;
  detailClass?: string;
}

export const CardAnimal: React.FC<CardAnimalProps> = ({
  rating,
  img,
  title,
  desc,
  path,
  detailClass,
}) => {
  return (
    <div className={`na-news-card ${detailClass}`}>
      <div className="na-card-animal">
        <Link to={`/GameDetail/${path}`}>
          <img src={img} alt="na-card" />
        </Link>
      </div>
      <div className="na-news-info">
        <h1>{title}</h1>
        <p>{rating}</p>
        <div className="na-news-rating"></div>
        <p>{desc}</p>
      </div>
    </div>
  );
};
