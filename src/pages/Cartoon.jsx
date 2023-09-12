import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Controller from "../controllers/controller";

import MovieCard from "../components/MovieCard/MovieCard";
import PageButtons from "../components/PageButtons/PageButtons";

const Cartoon = () => {
    // ------ Data State
    const [movies, setMovies] = useState(null)
    let { page } = useParams()


    // ------ Fetching Data
    useEffect(() => {
        console.log('[Cartoon] Fetch Cartoon Data ...')
        const fetchData = async () => {
            setMovies(null)
            let data = await Controller('GETCARTOONMOVIES', page)
            setMovies(data)
        }

        fetchData()
    }, [page])


    return (
        <div id="cartoon" className="page-container-0topside">
            <div className="section-container">
                <h1 className="section-title-no-up">Phim hoạt hình - Trang {page}</h1>

                <div className="mt-6 movies-grid">
                    {
                        movies && movies.data && movies.data.map((movie, index) => (
                            <MovieCard key={index} movie={movie} />
                        ))
                    }
                </div>

                <div className="mt-6 flex flex-row flex-wrap justify-center">
                    {
                        movies && movies.totalPages &&
                        <PageButtons curr={page} total={movies.totalPages} url={'hoat-hinh'} />
                    }
                </div>

            </div>
        </div>
    );
};

export default Cartoon;
