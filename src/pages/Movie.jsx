import { lazy, useEffect, useState, Suspense } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Controller from "../controllers/controller";

import MovieInfoSection from '../components/MovieInfoSection/MovieInfoSection'
const MovieMediaSection = lazy(() => import('../components/MovieMediaSection/MovieMediaSection'));

const Movie = () => {
    let { slug } = useParams()

    // ------ Data State
    const [movie, setMovie] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    let tap = searchParams.get('tap') // index
    let sv = searchParams.get('sv') // index
    console.log(tap, sv)

    // ------ Fetching Data
    useEffect(() => {
        const fetchData = async () => {
            let data = await Controller('GETMOVIE', slug)
            console.log(data)
            setMovie(data)
        }

        fetchData()
    }, [])


    return (
        <div className="bg-background">

            {/* ------ Information Section ------ */}
            {movie && !tap && !sv && <MovieInfoSection info={movie.movie} media={movie.episodes} />}

            {/* ------ Media Section ------ */}
            <Suspense fallback={<div className="w-screen h-screen bg-background flex justify-center items-center">Loading...</div>}>
                {movie && tap && sv && <MovieMediaSection info={movie.movie} media={movie.episodes} epIndex={tap} svIndex={sv} />}
            </Suspense>

        </div>
    );
};

export default Movie;
