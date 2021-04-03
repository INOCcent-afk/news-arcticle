import React from "react";
import { CardAnimal } from "../components/cards/CardAnimal";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Animal from "../assets/images/pexels-guillaume-meurice-1894350.jpg";

// Import Swiper styles
import "swiper/swiper.scss";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Home = () => {
  return (
    <>
      <div className="na-news-container">
        <CardAnimal />
        <CardAnimal />
        <CardAnimal />
      </div>

      <Swiper
        className="na-news-card-swiper"
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
        <SwiperSlide className="na-card-animal na-card-animal-sm ">
          <img src={Animal} alt="na-card" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
