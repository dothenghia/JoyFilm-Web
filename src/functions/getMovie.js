import axios from "axios";

export default async function getMovie(payload) {
    let slug = payload[0]

    try {
        let res = await axios.get(`https://ophim1.com/phim/${slug}`)

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