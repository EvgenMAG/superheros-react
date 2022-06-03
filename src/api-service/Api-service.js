import axios from 'axios';


axios.defaults.baseURL = 'https://my-super-heroes.herokuapp.com/api/heroes/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

const getListHeroes = async (page = 1) => {
    try {
        let paramUrl = `?page=${page}&limit=${5}`;
        const data = await axios.get(paramUrl)
        return data.data
    } catch (e) {
        console.log(e);
    }
};


const deleteHero = async (heroId) => {

    try {
        let paramUrl = `${heroId}`;
        const data = await axios.delete(paramUrl)
        return data.data
    } catch (e) {
        console.log(e);
    }
};


const createHeroes = async (hero) => {
    try {
        const data = await axios.post('https://my-super-heroes.herokuapp.com/api/heroes/', hero, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        return data
    } catch (e) {
        console.log(e);
    }
};

// const updateHero = async (heroId, body) => {
//     try {
//         let paramUrl = `${heroId}`;
//         const data = await axios.put(paramUrl,body)
//         return data
//     } catch (e) {
//         console.log(e);
//     }
// };



export default {
    getListHeroes,
    deleteHero,
    createHeroes,
};