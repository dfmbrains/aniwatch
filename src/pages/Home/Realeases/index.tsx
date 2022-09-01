import React, {useEffect, useState} from 'react';
import "./Releases.scss";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";


const Realeases = () => {

    const [topList, setTopList] = useState([]);

    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming',
            headers: {
                'X-RapidAPI-Key': '69ceed32c9msh526975afd6f4d95p10cc17jsn195dc89bbd83',
                'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setTopList(response.data.top);
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