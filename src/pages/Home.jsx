import CarouselThumbnails from '../components/CarouselThumbnails/CarouselThumbnails'
import SkeletonSlide from "../components/SkeletonSlide/SkeletonSlide";
import { useEffect, useState } from "react";
import Controller from "../controllers/controller";
import useTitle from '../hooks/useTitle'

import MovieSlide from '../components/MovieSlide/MovieSlide'
import { Link } from "react-router-dom";

const Home = () => {
    // console.log('[Home] Render')
    useTitle('Trang chủ | JoyFilm')

    // ------ Data State
    const [movies, setMovies] = useState(null)


    // ------ Fetching Data
    useEffect(() => {
        // console.log('[Home] Fetch HomePage Data ...')
        const fetchData = async () => {
            let data = await Controller('GETHOMEPAGEMOVIES')
            setMovies(data)
        }

        fetchData()
    }, [])


    return (
        <div id="home" className="bg-background pb-10">

            {/* ------ Carousel of 4 Top Movies ------ */}
            <CarouselThumbnails />


            {/* ------ NEW Movies Section ------ */}
            <div className="section-container mt-3 md:-mt-6 lg:-mt-8">
                <Link to='/phim-moi/1' className="section-title-link">Phim mới cập nhật</Link>
                {
                    (!movies || !movies.newMovies) ? (<SkeletonSlide />) : (<MovieSlide movies={movies.newMovies} />)
                }
                <div className="section-divider"></div>
            </div>



            {/* ------ THEATER Movies Section ------ */}
            <div className="section-container">
                <Link to='/chieu-rap/1' className="section-title-link">Phim chiếu rạp</Link>
                {
                    (!movies || !movies.theaterMovies) ? (<SkeletonSlide />) : (<MovieSlide movies={movies.theaterMovies} />)
                }
                <div className="section-divider"></div>
            </div>



            {/* ------ SINGLE Movies Section ------ */}
            <div className="section-container">
                <Link to='/phim-le/1' className="section-title-link">Phim lẻ</Link>
                {
                    (!movies || !movies.singleMovies) ? (<SkeletonSlide />) : (<MovieSlide movies={movies.singleMovies} />)
                }
                <div className="section-divider"></div>
            </div>



            {/* ------ SERIES Movies Section ------ */}
            <div className="section-container">
                <Link to='/phim-bo/1' className="section-title-link">Phim bộ</Link>
                {
                    (!movies || !movies.seriesMovies) ? (<SkeletonSlide />) : (<MovieSlide movies={movies.seriesMovies} />)
                }
                <div className="section-divider"></div>
            </div>



            {/* ------ CARTOON Movies Section ------ */}
            <div className="section-container">
                <Link to='/hoat-hinh/1' className="section-title-link">Hoạt hình</Link>
                {
                    (!movies || !movies.cartoonMovies) ? (<SkeletonSlide />) : (<MovieSlide movies={movies.cartoonMovies} />)
                }
            </div>

        </div>
    );
};

export default Home;
