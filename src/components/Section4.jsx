import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Section4.css';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function Section4({ isActive }) {
  const slides = [
    {
      id: 1,
      title: '자연이 살아 숨쉬는 곳',
      description: '자연 속 탐험 여행, 지금 출발해요! 신나는 놀이 기구부터 생태 체험까지! 자연 속에서 뛰어놀며 배울 수 있는 특별한 공간, 코코몽 에코파크에서 즐거운 하루를 보내세요!',
      image: '/img/play_img1.png'
    },
    {
      id: 2,
      title: '자연이 살아 숨쉬는 곳',
      description: '자연 속 탐험 여행, 지금 출발해요! 신나는 놀이 기구부터 생태 체험까지! 자연 속에서 뛰어놀며 배울 수 있는 특별한 공간, 코코몽 에코파크에서 즐거운 하루를 보내세요!',
      image: '/img/play_img2.png'
    },
    {
      id: 3,
      title: '자연이 살아 숨쉬는 곳',
      description: '자연 속 탐험 여행, 지금 출발해요! 신나는 놀이 기구부터 생태 체험까지! 자연 속에서 뛰어놀며 배울 수 있는 특별한 공간, 코코몽 에코파크에서 즐거운 하루를 보내세요!',
      image: '/img/play_img3.png'
    },
    {
      id: 4,
      title: '자연이 살아 숨쉬는 곳',
      description: '자연 속 탐험 여행, 지금 출발해요! 신나는 놀이 기구부터 생태 체험까지! 자연 속에서 뛰어놀며 배울 수 있는 특별한 공간, 코코몽 에코파크에서 즐거운 하루를 보내세요!',
      image: '/img/play_img4.png'
    },
    {
      id: 5,
      title: '자연이 살아 숨쉬는 곳',
      description: '자연 속 탐험 여행, 지금 출발해요! 신나는 놀이 기구부터 생태 체험까지! 자연 속에서 뛰어놀며 배울 수 있는 특별한 공간, 코코몽 에코파크에서 즐거운 하루를 보내세요!',
      image: '/img/play_img5.png'
    }
  ];

  return (
    <section id="section4" className={isActive ? 'active' : ''}>
      <div className="section4_slider">
        <div className="slider_container">
          <div className="slider_title">
            <h2>Play & Explore</h2>
          </div>
          <div className="slider_wrapper">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              initialSlide={2}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
              }}
              navigation={{
                prevEl: '.prev-btn',
                nextEl: '.next-btn',
              }}
              className="slider_track"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className={`slide${slide.id}`}>
                  <a href="#">
                    <div className="txt_wrap">
                      <h4>{slide.title}</h4>
                      <p>{slide.description}</p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
          <div className="slider_controls">
            <div className="slider_dots">
              {slides.map((_, index) => (
                <span key={index} className={`dot ${index === 2 ? 'active' : ''}`}></span>
              ))}
            </div>
            <div className="slider_nav">
              <button className="prev-btn">
                <ChevronLeft />
              </button>
              <button className="next-btn">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4; 