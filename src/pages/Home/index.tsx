import React from 'react';
import "./Home.scss";
import Slider from "./Slider";
import Realeases from "./Realeases";

const swipes = [
    {
        name: "Kimetsu No Yaiba",
        description: "Anime about boy who's family died on demons hand",
        id: 1,
        image: "https://wallup.net/wp-content/uploads/2019/09/08/302271-anime-anime-boys-guilty-crown-ouma-shu-tsutsugami-gai.jpg"
    },
    {
        name: "Attack On Titan",
        description: "Anime about boy who's family died on demons hand",
        id: 2,
        image: "https://wallup.net/wp-content/uploads/2019/09/08/302271-anime-anime-boys-guilty-crown-ouma-shu-tsutsugami-gai.jpg"
    }
];

const Home = () => {
    return (
        <div className="Home">
            <div className="container">
                <div className="Home__section">
                    <h2 className="Home__title">Explore</h2>
                    <h2 className="Home__subTitle">What are you gonna watch today ?</h2>
                    <div className="Home__slider">
                        <Slider swipes={swipes}/>
                    </div>
                    <Realeases/>
                </div>
            </div>
        </div>
    );
};

export default Home;