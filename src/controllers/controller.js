import getHomePageMovies from "../functions/getHomePageMovies";
import getMovie from "../functions/getMovie";
import searchMovies from "../functions/searchMovies";

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

        case 'SEARCHMOVIE': {
            const movie = await searchMovies(payload)
            return movie
        }


        default: {

        }
    }
}