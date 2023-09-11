import getHomePageMovies from "../functions/getHomePageMovies";
import getNewMovies from "../functions/getNewMovies";
import getSingleMovies from "../functions/getSingleMovies";
import getSeriesMovies from "../functions/getSeriesMovies";
import getCartoonMovies from "../functions/getCartoonMovies";
import getTheaterMovies from "../functions/getTheaterMovies";
import getMovie from "../functions/getMovie";
import searchMovies from "../functions/searchMovies";

export default async function Controller(type, ...payload) {
    switch (type) {
        case 'GETHOMEPAGEMOVIES': {
            const movies = await getHomePageMovies()
            return movies
        }

        case 'GETNEWMOVIES': {
            const movies = await getNewMovies(payload)
            return movies
        }
        case 'GETSINGLEMOVIES': {
            const movies = await getSingleMovies(payload)
            return movies
        }
        case 'GETSERIESMOVIES': {
            const movies = await getSeriesMovies(payload)
            return movies
        }
        case 'GETCARTOONMOVIES': {
            const movies = await getCartoonMovies(payload)
            return movies
        }
        case 'GETTHEATERMOVIES': {
            const movies = await getTheaterMovies(payload)
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