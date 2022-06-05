import axios from 'axios';


axios.defaults.baseURL = 'https://my-super-heroes.herokuapp.com/api/heroes/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

const getListHeroes = async (page = 1, limit = 5) => {
    try {
        let paramUrl = `?page=${page}&limit=${limit}`;
        const result = await axios.get(paramUrl)
        return result.data
    } catch (e) {
        console.log(e);
    }
};

const getHero = async (id) => {
    try {
        let paramUrl = `${id}`;
        const result = await axios.get(paramUrl)
        return result.data
    } catch (e) {
        console.log(e);
    }
};


const deleteHero = async (heroId) => {

    try {
        let paramUrl = `${heroId}`;
        const result = await axios.delete(paramUrl)
        return result.data
    } catch (e) {
        console.log(e);
    }
};


const createHero = async (hero) => {
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

const deleteHeroImage = async (heroId, imageId) => {
    try {
        let paramUrl = `${heroId}/${imageId}`;
        const result = await axios.patch(paramUrl)
        return result.data
    } catch (e) {
        console.log(e);
    }
};

const updateHero = async (heroId, hero) => {
    try {
        let paramUrl = `${heroId}`
        const result = await axios.put(paramUrl, hero, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        return result.data
    } catch (e) {
        console.log(e);
    }
};



export default {
    getListHeroes,
    deleteHero,
    createHero,
    getHero,
    deleteHeroImage,
    updateHero
};