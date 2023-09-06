import { useEffect, useState } from "react";
import Controller from "../controllers/controller";

import CarouselThumbnails from '../components/CarouselThumbnails/CarouselThumbnails'
import MovieSlide from '../components/MovieSlide'

const Home = () => {
    // ------ Data State
    const [movies , setMovies] = useState(null)

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
            <CarouselThumbnails />
            



            <h3>Phim mới cập nhật</h3>
            {
                movies && movies.newMovies &&
                <MovieSlide movies={movies.newMovies}/>
            }

            <h3>Phim chiếu rạp</h3>
            {
                movies && movies.theaterMovies &&
                <MovieSlide movies={movies.theaterMovies}/>
            }

            <h3>Phim lẻ</h3>
            {
                movies && movies.singleMovies &&
                <MovieSlide movies={movies.singleMovies}/>
            }

            <h3>Phim bộ</h3>
            {
                movies && movies.seriesMovies &&
                <MovieSlide movies={movies.seriesMovies}/>
            }

            <h3>Hoạt hình</h3>
            {
                movies && movies.cartoonMovies &&
                <MovieSlide movies={movies.cartoonMovies}/>
            }

        </div>
    );
};

export default Home;
