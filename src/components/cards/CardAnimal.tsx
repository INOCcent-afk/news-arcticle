import React from "react";
import Animal from "../../assets/images/pexels-guillaume-meurice-1894350.jpg";
import "../../assets/scss/cards.scss";

interface CardAnimalProps {}

export const CardAnimal: React.FC<CardAnimalProps> = ({}) => {
  return (
    <div className="na-news-card">
      <div className="na-card-animal">
        <img src={Animal} alt="na-card" />
      </div>
      <div className="na-news-info">
        <h1>TITLE</h1>
        <div className="na-news-rating"></div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was oo{" "}
        </p>
      </div>
    </div>
  );
};
