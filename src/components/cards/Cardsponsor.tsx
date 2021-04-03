import React from "react";

interface CardsponsorProps {
  img: string;
}

export const Cardsponsor: React.FC<CardsponsorProps> = ({ img }) => {
  return (
    <div className="na-card-animal na-card-animal-sm ">
      <img src={img} alt="na-card" />
    </div>
  );
};
