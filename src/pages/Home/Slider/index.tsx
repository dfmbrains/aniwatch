import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "./swiper.scss"
import image from "../../../assets/imgs/spy_carousel 1.png"


const Slider = ({swipes}: any) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
            >
                {swipes
                    ? swipes.map((anime: any) => (
                        <SwiperSlide key={anime.id}>
                            <div className="blurEffect"></div>
                            <h2 className="title">{anime.name}</h2>
                            <h2 className="subtitle">{anime.description}</h2>
                            <img src={image} alt=""/>
                        </SwiperSlide>
                    ))
                    : ""
                }

            </Swiper>
        </>
    );
};

export default Slider;