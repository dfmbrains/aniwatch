import React, {useEffect} from 'react';
import "./Releases.scss";
import {topList, options} from "../../../store/service";
import {Swiper, SwiperSlide} from "swiper/react";
import {useRecoilState} from "recoil";
import axios from "axios";


const Realeases = () => {

    const [list, setList] = useRecoilState(topList);

    useEffect(()=>{
        axios.request(options).then(function (response) {
            setList(response.data.top)
        }).catch(function (error) {
            console.error(error);
        });

    }, []);

    return (
        <div className="realeases">
            <h2 className="realeases__title">New Realease</h2>
            <div className="container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}>
                    {list.length > 0
                        ? list.map((item: any)=>(
                            <SwiperSlide key={item.mal_id}>
                                <div className="realeases__card">
                                    <img className="realeases__card_img" src={item.image_url} alt=""/>
                                    <div className="realeases__card_blur">
                                    </div>
                                    <span className="realeases__card_subtitle">{item.start_date}</span>
                                    <span className="realeases__card_title">{item?.title?.length > 30 ? item.title.slice(0, 30) + "..." : item.title}</span>
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