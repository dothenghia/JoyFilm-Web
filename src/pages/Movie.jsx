import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Controller from "../controllers/controller";
import MovieInfoSection from '../components/MovieInfoSection/MovieInfoSection'
import MovieMediaSection from '../components/MovieMediaSection/MovieMediaSection'

const Movie = () => {
    let { slug } = useParams()

    // ------ Data State
    const [movie, setMovie] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    let tap = searchParams.get('tap') // slug
    let sv = searchParams.get('sv') || 0 // index
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

            {/* Information Section */}
            {movie && !tap && !sv && <MovieInfoSection info={movie.movie} media={movie.episodes} />}

            {/* Media Section */}
            {movie && tap && sv && <MovieMediaSection info={movie.movie} media={movie.episodes} epSlug={tap} svIndex={sv} />}

        </div>
    );
};

export default Movie;
