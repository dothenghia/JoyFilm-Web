import getHomePageMovies from "../functions/getHomePageMovies";

export default async function Controller (type, ...payload) {
    switch (type) {
        case 'GETHOMEPAGEMOVIES' : {
            const movies = await getHomePageMovies()
            return movies
        }


        default : {
            
        }
    }
}