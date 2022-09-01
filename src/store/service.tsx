import axios from "axios";
import {atom,} from 'recoil';

export const topList = atom({
    key: 'listOfTop',
    default: [],
});

const options = {
    method: 'GET',
    url: 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming',
    headers: {
        'X-RapidAPI-Key': '69ceed32c9msh526975afd6f4d95p10cc17jsn195dc89bbd83',
        'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
    }
};

// axios.request(options).then(function (response) {
//     setTopList(response.data.top);
// }).catch(function (error) {
//     console.error(error);
// });