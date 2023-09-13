import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Controller from "../controllers/controller";
import useTitle from '../hooks/useTitle'
import SkeletonGrid from "../components/SkeletonGrid/SkeletonGrid";

import MovieCard from "../components/MovieCard/MovieCard";
import PageButtons from "../components/PageButtons/PageButtons";

const Single = () => {
    // ------ Data State
    const [movies, setMovies] = useState(null)
    let { page } = useParams()

    useTitle(`Phim lẻ - Trang ${page} | JoyFilm`)

    // ------ Fetching Data
    useEffect(() => {
        console.log('[Single] Fetch Single Data ...')
        const fetchData = async () => {
            setMovies(null)
            let data = await Controller('GETSINGLEMOVIES', page)
            setMovies(data)
        }

        fetchData()
    }, [page])


    return (
        <div id="single" className="page-container-0topside">
            <div className="section-container">
                <h1 className="section-title-no-up">Phim lẻ - Trang {page}</h1>

                {
                    (!movies || !movies.data) ?
                    (
                        <>
                            <SkeletonGrid />
                            <SkeletonGrid />
                            <SkeletonGrid />
                            <SkeletonGrid />
                        </>
                    ) :
                    (
                        <div className="mt-6 movies-grid">
                            {movies.data.map((movie, index) => (
                                <MovieCard key={index} movie={movie} />
                            ))}
                        </div>
                    )
                }

                <div className="mt-6 flex flex-row flex-wrap justify-center">
                    {
                        movies && movies.totalPages &&
                        <PageButtons curr={page} total={movies.totalPages} url={'phim-le'} />
                    }
                </div>

            </div>
        </div>
    );
};

export default Single;
