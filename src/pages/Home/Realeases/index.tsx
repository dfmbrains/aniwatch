import React, {useEffect, useState} from 'react';
import "./Releases.scss";
import {getListOfTop} from "../../../store/service";
import {Swiper, SwiperSlide} from "swiper/react";
import {useRecoilValue} from "recoil";
import {useNavigate} from "react-router-dom";

const Realeases = () => {

    const list = useRecoilValue(getListOfTop);
    const navigate = useNavigate();

    return (
        <div className="realeases">
            <h2 className="realeases__title">Most Popular:</h2>
            <div className="container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}>
                    {list.length
                        ? list.map((item: any) => (
                            <SwiperSlide key={item.mal_id}>
                                <div onClick={() => {
                                    navigate(`details/${item.mal_id}`)
                                }} className="realeases__card">
                                    <div className="realeases__card_blur"/>
                                    <img className="realeases__card_img" src={item?.images?.jpg.image_url} alt=""/>
                                    <span className="realeases__card_subtitle">{item.start_date}</span>
                                    <span
                                        className="realeases__card_title">{item?.title?.length > 30 ? item.title.slice(0, 30) + "..." : item.title}</span>
                                </div>
                            </SwiperSlide>
                        ))
                        : Array.from(Array(6).keys()).map((item) => (
                            <SwiperSlide key={item}>
                                <div className="realeases__card">
                                    <div className="realeases__card_blur"/>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Realeases;