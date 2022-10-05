import axios from "axios";

const instance = axios.create({
    baseURL: "https://hassen-tiktok-clone-backend.herokuapp.com"
});

export default instance