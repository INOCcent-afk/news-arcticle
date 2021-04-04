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
  moreDesc1?: string;
  moreDesc2?: string;
}

export const CardAnimal: React.FC<CardAnimalProps> = ({
  rating,
  img,
  title,
  desc,
  path,
  detailClass,
  moreDesc1,
  moreDesc2,
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
        <p>{moreDesc1}</p>
        <p>{moreDesc2}</p>
      </div>
    </div>
  );
};
