import axios from "axios";

// api
const url = `https://developer-lostark.game.onstove.com`;
// eslint-disable-next-line no-undef
const API_KEY = import.meta.env.VITE_API_KEY;


// 프로필 내역
export const getChaData = async (chaName) => {
    let data = await axios.get(url + `/armories/characters/${chaName}/profiles`, {
        headers: {
            accept: 'application/json',
            Authorization: `bearer ${API_KEY}`,
        },
    });

    if (data.data === null) {
        return null;
    } else {
        return data;
    }
}

// 장비 내역
export const getEquData = async (chaName) => {
    let data = await axios.get(url + `/armories/characters/${chaName}/equipment`, {
        headers: {
            accept: 'application/json',
            Authorization: `bearer ${API_KEY}`
        }
    })
    if (data.data === null) {
        return null;
    } else {
        return data;
    }
}