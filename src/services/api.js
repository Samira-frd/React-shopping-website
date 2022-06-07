const { default: axios } = require("axios");

const BASE_URL = "https://fakestoreapi.com";

const getProducts = async () => {
    const responce = await axios.get(`${BASE_URL}/products`);
    return responce.data;
}

export {getProducts};