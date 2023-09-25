import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Controller from "../controllers/controller";
import useTitle from '../hooks/useTitle'
import SkeletonGrid from "../components/SkeletonGrid/SkeletonGrid";

import MovieCard from "../components/MovieCard/MovieCard";
import PageButtons from "../components/PageButtons/PageButtons";
import IntroNewVersion from '../components/IntroNewVersion/IntroNewVersion'

const New = () => {
    // ------ Data State
    const [movies, setMovies] = useState(null)
    let { page } = useParams()

    useTitle(`Phim mới cập nhật - Trang ${page} | JoyFilm`)

    // ------ Fetching Data
    useEffect(() => {
        // console.log('[New] Fetch New Data ...')
        const fetchData = async () => {
            setMovies(null)
            let data = await Controller('GETNEWMOVIES', page)
            setMovies(data)
        }

        fetchData()
    }, [page])


    return (
        <div id="new" className="page-container-0topside">
            <div className="section-container">
            
                <IntroNewVersion/>

                <h1 className="section-title-no-up">Phim mới cập nhật - Trang {page}</h1>

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
                        <PageButtons curr={page} total={movies.totalPages} url={'phim-moi'} />
                    }
                </div>

            </div>
        </div>
    );
};

export default New;
