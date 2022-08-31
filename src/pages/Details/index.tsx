import React from 'react';
import './details.scss';

const Details = () => {
    return (
        <section className="details">
            <div className="container">
                <div className="details__content">
                    <h2 className="details__title">One Piece - Episode 1018</h2>
                    <div className="details__player"/>
                    <div className="details__info">
                        <div className="details__promo">
                            <div className="details__promo_img"/>
                        </div>
                        <ul className="details__specific">
                            <li className="details__specific_item">
                                <h4>Type :</h4>
                                <p>Tv</p>
                            </li>
                            <li className="details__specific_item">
                                <h4>Status :</h4>
                                <p>Tv</p>
                            </li>
                            <li className="details__specific_item">
                                <h4>Studios :</h4>
                                <p>Tv</p>
                            </li>
                            <li className="details__specific_item">
                                <h4>Duration :</h4>
                                <p>Tv</p>
                            </li>
                            <li className="details__specific_item">
                                <h4>Genres :</h4>
                                <p>Tv</p>
                            </li>
                        </ul>
                    </div>
                    <h4 className="details__subtitle">Sypnosis :</h4>
                    <p className="details__description">Gol D. Roger was known as the "Pirate King," the strongest and
                        most infamous being to have sailed the Grand Line. The capture and execution of Roger by the
                        World Government brought a change throughout the world. His last words before his death revealed
                        the existence of the greatest treasure in the world, One Piece. It was this revelation that
                        brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an
                        unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of
                        the Pirate King.</p>
                </div>
                <div className="details__recs">
                    <h3 className="details__recs_title">Popular Anime</h3>
                    <div className="details__recs_row">
                        {Array.from(Array(6).keys()).map((el: number) => (
                            <div className="details__recs_item"/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;