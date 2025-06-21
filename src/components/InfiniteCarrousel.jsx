import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import './InfiniteCarrousel.scss';


export const InfiniteCarrousel = ({ images }) => {
    const extendedImages = [...images, ...images];
    return (
        <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={0}
            slidesPerView={4}
            loop={false}
            speed={10000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            freeMode={true}
            freeModeMomemtum={false}
            allowTouchMove={false}
            className="swiper-infinite"
        >
            {extendedImages.map((src, idx) => (
                <SwiperSlide key={idx} className="carousel-slide">
                    <img
                        src={src}
                        alt={`slide-${idx}`}
                        className="carousel-img" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}