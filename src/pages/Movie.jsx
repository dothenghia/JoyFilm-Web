import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Controller from "../controllers/controller";
import MovieInfoSection from '../components/MovieInfoSection/MovieInfoSection'
import MovieMediaSection from '../components/MovieMediaSection/MovieMediaSection'

const Movie = () => {
    let { slug } = useParams()

    // ------ Data State
    const [movie, setMovie] = useState(null)


    // ------ Fetching Data
    useEffect(() => {
        const fetchData = async () => {
            let data = await Controller('GETMOVIE', slug)
            // console.log(data)
            setMovie(data)
        }

        fetchData()
    }, [])


    return (
        <div className="bg-background">

            {/* Information Section */}
            {movie && <MovieInfoSection info={movie.movie} />}

            {/* Media Section */}
            {movie && <MovieMediaSection media={movie.episodes} />}

        </div>
    );
};

export default Movie;
