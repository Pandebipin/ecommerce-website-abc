import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../App.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="rounded-lg shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <p className="mt-4 font-semibold">Bipin pandey</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <p className="mt-4 font-semibold">Karlex pandey</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <p className="mt-4 font-semibold">basant kutta</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris ."
            </p>
            <p className="mt-4 font-semibold">lionell robbins</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris ."
            </p>
            <p className="mt-4 font-semibold">Adam smith</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris ."
            </p>
            <p className="mt-4 font-semibold">karl marks</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
