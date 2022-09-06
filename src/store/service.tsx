import {atom, selector} from 'recoil';
import axios from "axios";

export const topList = atom({
    key: 'listOfTop',
    default: [],
});

export const randomAnimeState = atom({
    key: "takeRandomAnime",
    default: {}
});

export const getAllAnime = selector({
    key: 'getAllAnime',
    get: () => {
        return axios.get(`https://api.jikan.moe/v4/anime`).then(function (response) {
            return response.data.data
        }).catch(function (error) {
            return []
        });
    },
});



export const getListOfTop = selector({
    key: 'getListOfTop',
    get: () => {
        return axios.get("https://api.jikan.moe/v4/top/anime").then(function (response) {
            return response.data.data;
        }).catch(function (error) {
            return [];
        });
    },
});