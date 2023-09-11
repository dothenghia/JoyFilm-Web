import axiosInstance from "./configs";

export default async function getSingleMovies(payload) {
    let page = payload[0]

    try {
        let res = await axiosInstance.get(`/single/${page}`);

        res = res.data

        return res
    }

    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
}