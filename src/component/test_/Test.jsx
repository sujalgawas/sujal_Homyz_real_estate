import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";


SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Test() {
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          style={{ listStyle: "none" }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  );
}

export default Test;