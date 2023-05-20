import { useEffect } from "react";
import Carousel01 from "../assets/images/carousel-01.jpg";
import Carousel02 from "../assets/images/carousel-02.jpg";
import Carousel03 from "../assets/images/carousel-03.jpg";
import Carousel04 from "../assets/images/carousel-04.jpg";
import Carousel05 from "../assets/images/carousel-05.jpg";
import Carousel06 from "../assets/images/carousel-06.jpg";
import Carousel07 from "../assets/images/carousel-07.jpg";
import Carousel08 from "../assets/images/carousel-08.jpg";
import Avatar01 from "../assets/images/carousel-avatar-01.jpg";
import Avatar02 from "../assets/images/carousel-avatar-02.jpg";
import Avatar03 from "../assets/images/carousel-avatar-03.jpg";
import Avatar04 from "../assets/images/carousel-avatar-04.jpg";
import Avatar05 from "../assets/images/carousel-avatar-05.jpg";
import Avatar06 from "../assets/images/carousel-avatar-06.jpg";
import Avatar07 from "../assets/images/carousel-avatar-07.jpg";
import Avatar08 from "../assets/images/carousel-avatar-08.jpg";
import Avatar09 from "../assets/images/carousel-avatar-09.jpg";
import Avatar10 from "../assets/images/carousel-avatar-10.jpg";
import Avatar11 from "../assets/images/carousel-avatar-11.jpg";
import Avatar12 from "../assets/images/carousel-avatar-12.jpg";
import Avatar13 from "../assets/images/carousel-avatar-13.jpg";
import Avatar14 from "../assets/images/carousel-avatar-14.jpg";
import Avatar15 from "../assets/images/carousel-avatar-15.jpg";
import Avatar16 from "../assets/images/carousel-avatar-16.jpg";
import Avatar17 from "../assets/images/carousel-avatar-17.jpg";
import Avatar18 from "../assets/images/carousel-avatar-18.jpg";
import Swiper, { Navigation } from "swiper";

import "swiper/swiper.min.css";
import SwiperImg from "./Swiper/SwiperImg";
Swiper.use([Navigation]);

const carousel = [
  Carousel01,
  Carousel02,
  Carousel03,
  Carousel04,
  Carousel05,
  Carousel06,
  Carousel07,
  Carousel08,
];

const Carousel = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper(".carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  }, []);

  return (
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-gray-100">
              Trending collections
            </h2>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container max-w-sm mx-auto sm:max-w-none ">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              {carousel.map((i) => {
                return <SwiperImg Carousel={i} />;
              })}
            </div>
          </div>
          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
