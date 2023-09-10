import axiosInstance from "./configs";

export default async function searchMovie(payload) {
    let name = payload[0]

    try {
        let res = await axiosInstance.get(`/search?name=${name}`);

        res = res.data.data
        // console.log(res)

        return res
    }

    catch (err) {
        if (err.response) {
            console.log(err.response.data.message);
            return { error: err.response.data.message };
        }
    }
}