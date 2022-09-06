import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "./swiper.scss"
import {useNavigate} from "react-router-dom"
import {useRecoilState} from "recoil";
import {randomAnimeState} from "../../../store/service";
import axios from "axios";


const Slider = () => {

    const navigate = useNavigate();
    const [randomAnime, setRandomAnime]: any = useRecoilState(randomAnimeState);

    const directDetails = (id: number)=>{
      navigate(`/details/${id}`)
    };

    useEffect(()=>{
        axios.get("https://api.jikan.moe/v4/random/anime").then(function (response) {
            setRandomAnime(response.data.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <>
            <Swiper
                slidesPerView={1}
            >
                {randomAnime
                    ? <SwiperSlide onClick={()=> {directDetails(randomAnime?.mal_id)}}>
                            <div className="blurEffect"> </div>
                            <h2 className="title">{randomAnime?.title}</h2>
                            <h2 className="subtitle">{randomAnime?.synopsis}</h2>
                            <img src={randomAnime?.images?.jpg?.large_image_url} alt=""/>
                </SwiperSlide>

                    : <SwiperSlide>
                        <h2 className="title"></h2>
                        <h2 className="subtitle"></h2>
                    </SwiperSlide>
                }

            </Swiper>
        </>
    );
};

export default Slider;