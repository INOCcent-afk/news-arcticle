import React, { useEffect } from "react";
import { CardAnimal } from "../components/cards/CardAnimal";

import "swiper/swiper.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { newsState } from "../store/news/newsTypes";
import { loadNews } from "../store/news/newsAction";
import { loadSponsors } from "../store/sponsors/sponsorsAction";
import { SponsorsState } from "../store/sponsors/sponsorsTypes";
import { Cardsponsor } from "../components/cards/Cardsponsor";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Home = () => {
  const dispatch = useDispatch();

  const news = useSelector<AppState, newsState["news"]>(
    (state) => state.newsReducer.news
  );
  const sponsors = useSelector<AppState, SponsorsState["sponsors"]>(
    (state) => state.sponsorsReducer.sponsors
  );

  useEffect(() => {
    dispatch(loadNews());
    dispatch(loadSponsors());
  }, [dispatch]);

  return (
    <>
      <div className="na-news-container">
        {news.map((data) => (
          <CardAnimal
            img={data.image}
            title={data.title}
            desc={data.desc}
            key={data.id}
            rating={data.rating}
            path={data.id}
          />
        ))}
      </div>

      <Swiper
        className="na-news-card-swiper"
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.id}>
            <Cardsponsor img={sponsor.image} key={sponsor.id} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="na-news-card-swiper"
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.id}>
            <Cardsponsor img={sponsor.image} key={sponsor.id} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="na-news-card-swiper"
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide key={sponsor.id}>
            <Cardsponsor img={sponsor.image} key={sponsor.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
