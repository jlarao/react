import axios from "axios";


const productsApi = axios.create({
    baseURL: "http://localhost:3100",
    headers: {
        "x-api-key": "123456"
    }
});

export  { productsApi }