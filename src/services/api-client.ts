import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '31a3d748dc944372b19614e8fd53b9f9'
    }
})