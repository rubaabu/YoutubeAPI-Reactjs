import axios from 'axios';

const KEY = "AIzaSyDT9M_P2_cT9ny3hDxG5bSbnEUl3weyMZ8";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
    part: "snippet",
    maxResults: 10,
    key: KEY}
    });
