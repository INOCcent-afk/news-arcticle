import React from "react";
import "../../assets/scss/cards.scss";

interface CardAnimalProps {
  img: string;
  title: string;
  desc: string;
  rating: string;
}

export const CardAnimal: React.FC<CardAnimalProps> = ({
  rating,
  img,
  title,
  desc,
}) => {
  return (
    <div className="na-news-card">
      <div className="na-card-animal">
        <img src={img} alt="na-card" />
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
