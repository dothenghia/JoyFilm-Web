import { useEffect, useState } from "react";
import Controller from "../controllers/controller";

import CarouselThumbnails from '../components/CarouselThumbnails/CarouselThumbnails'
import MovieSlide from '../components/MovieSlide'

const Home = () => {
    // ------ Data State
    const [movies, setMovies] = useState(null)


    // ------ Fetching Data
    useEffect(() => {
        console.log('[Home] Fetch HomePage Data')
        const fetchData = async () => {
            let data = await Controller('GETHOMEPAGEMOVIES')
            setMovies(data)
        }

        fetchData()
    }, [])


    return (
        <div id="home" className="bg-background">
            
            {/* Carousel of 4 Top Movies */}
            <CarouselThumbnails />

            {/* NEW Movies Section */}
            <div className="section-container">
                <h3 className="section-title">Phim mới cập nhật</h3>
                {
                    movies && movies.newMovies && <MovieSlide movies={movies.newMovies} />
                }
            </div>

            {/* THEATER Movies Section */}
            <div className="section-container">
                <h3 className="section-title">Phim chiếu rạp</h3>
                {/* {
                    movies && movies.theaterMovies && <MovieSlide movies={movies.theaterMovies} />
                } */}
            </div>

            {/* SINGLE Movies Section */}
            <div className="section-container">
                <h3 className="section-title">Phim lẻ</h3>
                {
                    movies && movies.singleMovies && <MovieSlide movies={movies.singleMovies} />
                }
            </div>

            {/* SERIES Movies Section */}
            <div className="section-container">
                <h3 className="section-title">Phim bộ</h3>
                {/* {
                    movies && movies.seriesMovies && <MovieSlide movies={movies.seriesMovies} />
                } */}
            </div>

            {/* CARTOON Movies Section */}
            <div className="section-container">
                <h3 className="section-title">Hoạt hình</h3>
                {/* {
                    movies && movies.cartoonMovies && <MovieSlide movies={movies.cartoonMovies} />
                } */}
            </div>

        </div>
    );
};

export default Home;
