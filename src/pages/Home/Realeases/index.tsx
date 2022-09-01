import React, {useEffect, useState} from 'react';
import "./Releases.scss";
import {topList} from "../../../store/service";
import {Swiper, SwiperSlide} from "swiper/react";
import {useRecoilState} from "recoil";


const Realeases = () => {

    const [list, setList] = useRecoilState(topList);

    return (
        <div className="realeases">
            <h2 className="realeases__title">New Realease</h2>
            <div className="container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}>
                    {topList.length > 0
                        ? topList.map((item: any)=>(
                            <SwiperSlide key={item}>
                                <div className="realeases__card">
                                    <img className="realeases__card_img" src={item.image_url} alt=""/>
                                    <div className="realeases__card_blur">
                                    </div>
                                    <span className="realeases__card_subtitle">{item.start_date}</span>
                                    <span className="realeases__card_title">{item.title}</span>
                                </div>
                            </SwiperSlide>
                        ))
                        : ""
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Realeases;