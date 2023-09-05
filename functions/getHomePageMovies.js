import axiosInstance from "./configs";

export default async function getHomePageMovies() {

    try {
        let res = await axiosInstance.get("/");

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