import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://joyfilm-server.netlify.app/.netlify/functions/actions",
});

export default axiosInstance;
