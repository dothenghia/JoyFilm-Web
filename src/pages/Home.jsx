import { useEffect, useState } from "react";
import Controller from "../controllers/controller";

import CarouselThumbnails from '../components/CarouselThumbnails/CarouselThumbnails'
import MovieSlide from '../components/MovieSlide/MovieSlide'
import { Link } from "react-router-dom";

const Home = () => {
    // ------ Data State
    const [movies, setMovies] = useState(null)


    // ------ Fetching Data
    useEffect(() => {
        console.log('[Home] Fetch HomePage Data ...')
        const fetchData = async () => {
            let data = await Controller('GETHOMEPAGEMOVIES')
            setMovies(data)
        }

        fetchData()
    }, [])


    return (
        <div id="home" className="bg-background">

            {/* ------ Carousel of 4 Top Movies ------ */}
            <CarouselThumbnails />


            {/* ------ NEW Movies Section ------ */}
            <div className="section-container">
                <Link to='/phim-moi/1' className="section-title-link">Phim mới cập nhật</Link>
                {movies && movies.newMovies && <MovieSlide movies={movies.newMovies} />}
                <div className="text-right">
                    <Link to='/phim-moi/1' className="section-more">
                        Xem thêm
                        <span className="pl-1 inline-flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></span>
                    </Link>
                </div>
                <div className="section-divider"></div>
            </div>



            {/* ------ THEATER Movies Section ------ */}
            <div className="section-container">
                <Link to='/chieu-rap/1' className="section-title-link">Phim chiếu rạp</Link>
                {movies && movies.theaterMovies && <MovieSlide movies={movies.theaterMovies} />}
                <div className="text-right">
                    <Link to='/chieu-rap/1' className="section-more">
                        Xem thêm
                        <span className="pl-1 inline-flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></span>
                    </Link>
                </div>
                <div className="section-divider"></div>
            </div>



            {/* ------ SINGLE Movies Section ------ */}
            <div className="section-container">
                <Link to='/phim-le/1' className="section-title-link">Phim lẻ</Link>
                {movies && movies.singleMovies && <MovieSlide movies={movies.singleMovies} />}
                <div className="text-right">
                    <Link to='/phim-le/1' className="section-more">
                        Xem thêm
                        <span className="pl-1 inline-flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></span>
                    </Link>
                </div>
                <div className="section-divider"></div>
            </div>



            {/* ------ SERIES Movies Section ------ */}
            <div className="section-container">
                <Link to='/phim-bo/1' className="section-title-link">Phim bộ</Link>
                {movies && movies.seriesMovies && <MovieSlide movies={movies.seriesMovies} />}
                <div className="text-right">
                    <Link to='/phim-bo/1' className="section-more">
                        Xem thêm
                        <span className="pl-1 inline-flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></span>
                    </Link>
                </div>
                <div className="section-divider"></div>
            </div>



            {/* ------ CARTOON Movies Section ------ */}
            <div className="section-container pb-10">
                <Link to='/hoat-hinh/1' className="section-title-link">Hoạt hình</Link>
                {movies && movies.cartoonMovies && <MovieSlide movies={movies.cartoonMovies} />}
                <div className="text-right">
                    <Link to='/hoat-hinh/1' className="section-more">
                        Xem thêm
                        <span className="pl-1 inline-flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;
