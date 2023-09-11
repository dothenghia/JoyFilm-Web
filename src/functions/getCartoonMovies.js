import axiosInstance from "./configs";

export default async function getCartoonMovies(payload) {
    let page = payload[0]

    try {
        let res = await axiosInstance.get(`/cartoon/${page}`);

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