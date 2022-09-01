import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "./swiper.scss"
import image from "../../../assets/imgs/spy_carousel 1.png"
import {useRecoilState} from "recoil";
import {topList} from "../../../store/service";


const Slider = () => {

    const [list, setList] = useRecoilState(topList);

    return (
        <>
            <Swiper
                slidesPerView={1}
            >
                {list
                    ? list.map((anime: any) => (
                        <SwiperSlide key={anime.id}>
                            <div className="blurEffect"></div>
                            <h2 className="title">{anime.title}</h2>
                            <h2 className="subtitle">{anime.start_date}</h2>
                            <img src={anime.image_url} alt=""/>
                        </SwiperSlide>
                    ))
                    : ""
                }

            </Swiper>
        </>
    );
};

export default Slider;