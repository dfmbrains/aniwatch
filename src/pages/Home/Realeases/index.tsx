import React from 'react';
import "./Releases.scss";
import {Swiper, SwiperSlide} from "swiper/react";


const Realeases = () => {

    const arr = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div className="realeases">
            <h2 className="realeases__title">New Realease</h2>
            <div className="container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}>
                    {arr
                        ? arr.map((item: number)=>(
                            <SwiperSlide key={item}>
                                <div className="realeases__card">

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