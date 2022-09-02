import React, {useEffect, useState} from 'react';
import './list.scss';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const List = () => {

    const navigate = useNavigate();

    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://api.jikan.moe/v4/anime`,
        };
        axios(options).then(function (response) {
            setAnimeList(response.data.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <section className="list">
            <div className="container">
                <h2 className="list__title">All</h2>
                <div className="list__column">
                    {animeList && animeList.map((el: any, idx: number) => (
                        <div onClick={() => navigate(`/details/${el.mal_id}`)} className="list__item">
                            <h3 className="list__item_number">{idx + 1}</h3>
                            <div className="list__item_info">
                                <img src={el.images.webp.image_url} alt=""/>
                                <div className="list__item_info-right">
                                    <h3 className="list__item_info-title">{el.title}</h3>
                                    <h4 className="list__item_info-title-second">{el.title_japanese}, {el.year}, {el.duration}</h4>
                                    <p className="list__item_info-title-second">Genre: {el.genres.map((el: any) =>
                                        <span>{el.name}, </span>)}</p>
                                    <p className="list__item_info-title-second">Studio: {el.studios[0].name}</p>
                                </div>
                            </div>
                            <h3 className="list__item_score">{el.score}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default List;