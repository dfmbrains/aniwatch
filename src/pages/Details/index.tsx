import React, {useEffect, useState} from 'react';
import './details.scss';
import {useRecoilState} from "recoil";
import {topList} from "../../store/service";
import {useParams, Link, useNavigate, useLocation} from "react-router-dom";
import axios from "axios";

const Details = () => {

    const [list, setList]: any = useRecoilState(topList);
    const [animeDetails, setAnimeDetails]: any = useState();

    const params: any = useParams();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {

        axios.get("https://api.jikan.moe/v4/top/anime").then(function (response) {
            setList(response.data.data);
        }).catch(function (error) {
            console.error(error);
        });

        axios(`https://api.jikan.moe/v4/anime/${params.id}/full`).then(function (response) {
            setAnimeDetails(response.data.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [location.pathname]);

    return (
        <section className="details">
            <div className="container">
                <div className="details__content">
                    <h2 className="details__title">{animeDetails?.title}</h2>
                    {animeDetails
                        ? animeDetails?.trailer?.embed_url ?
                            <iframe className="details__player" src={animeDetails?.trailer?.embed_url}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; clipboard-write;
                                  encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                            : <div style={{marginBottom: 50}}> </div>
                        : <div className="details__player"/>
                    }

                    <div className="details__info">
                        <div className="details__promo">
                            {animeDetails ?
                                <img className="details__promo_img" src={animeDetails?.images?.webp?.large_image_url}
                                     alt=""/>
                                : <div className="details__promo_img"/>
                            }
                        </div>
                        <ul className="details__specific">
                            <li className="details__specific_li">
                                <h4>Type : {}</h4>
                                <p>{animeDetails?.type}</p>
                            </li>
                            <li className="details__specific_li">
                                <h4>Status :</h4>
                                <p>{animeDetails?.status}</p>
                            </li>
                            <li className="details__specific_li">
                                <h4>Studios :</h4>
                                <p>Tv</p>
                            </li>
                            <li className="details__specific_li">
                                <h4>Duration :</h4>
                                <p>{animeDetails?.duration}</p>
                            </li>
                            <li className="details__specific_li">
                                <h4>Genres :</h4>
                                <p>{animeDetails?.genres?.map((item: any) => (
                                    <Link key={item.name} to="/genres"> {item.name}, </Link>))}</p>
                            </li>
                        </ul>
                    </div>
                    <h4 className="details__subtitle">Sypnosis :</h4>
                    <p className="details__description">{animeDetails?.synopsis}</p>
                </div>
                <div className="details__recs">
                    <h3 className="details__recs_title">Popular Anime</h3>
                    <div className="details__recs_row">
                        {
                            list.length > 0 ?
                                list.map((el: any) => (
                                    <div className="details__recs_item">
                                        <img className="details__recs_item-img" src={el?.images?.jpg.image_url} alt=""/>
                                        <div onClick={() => {
                                            navigate(`/details/${el.mal_id}`)
                                        }} className="details__recs_item-blur"/>
                                    </div>
                                ))
                                : Array.from(Array(6).keys()).map((el: number) => (
                                    <div key={el} className="details__recs_item"/>
                                ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;