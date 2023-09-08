import getHomePageMovies from "../functions/getHomePageMovies";
import getMovie from "../functions/getMovie";

export default async function Controller(type, ...payload) {
    switch (type) {
        case 'GETHOMEPAGEMOVIES': {
            const movies = await getHomePageMovies()
            return movies
        }

        case 'GETMOVIE': {
            const movie = await getMovie(payload)
            return movie
        }


        default: {

        }
    }
}