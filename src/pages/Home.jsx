import { useEffect, useState } from "react";
import Controller from "../controllers/controller";
import useTitle from '../hooks/useTitle'

import CarouselThumbnails from '../components/CarouselThumbnails/CarouselThumbnails'
import MovieSlide from '../components/MovieSlide/MovieSlide'
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Home = () => {
    useTitle('Trang chủ | JoyFilm')

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
        <div id="home" className="bg-background pb-10">

            {/* ------ Carousel of 4 Top Movies ------ */}
            <CarouselThumbnails />


            {/* ------ NEW Movies Section ------ */}
            <div className="section-container mt-3 md:-mt-6 lg:-mt-8">
                <Link to='/phim-moi/1' className="section-title-link">Phim mới cập nhật</Link>
                {(!movies || !movies.newMovies) ? (
                    // Sử dụng Skeleton loading nếu dữ liệu chưa tải xong
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <p>
                            <Skeleton count={1} className="h-[250px] sm:h-[255px] md:h-[220px] min-[896px]:h-[170px] lg:h-[200px] xl:h-[230px]" />
                            <Skeleton count={1} className="h-11 mt-2" />
                            <Skeleton count={1} className="h-4 mt-1" />
                        </p>
                    </SkeletonTheme>
                ) : (
                    // Hiển thị danh sách phim nếu dữ liệu đã tải xong
                    <MovieSlide movies={movies.newMovies} />
                )}
                <div className="section-divider"></div>
            </div>



            {/* ------ THEATER Movies Section ------ */}
            <div className="section-container">
                <Link to='/chieu-rap/1' className="section-title-link">Phim chiếu rạp</Link>
                {(!movies || !movies.theaterMovies) ? (
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <p>
                            <Skeleton count={1} className="h-[250px] sm:h-[255px] md:h-[220px] min-[896px]:h-[170px] lg:h-[200px] xl:h-[230px]" />
                            <Skeleton count={1} className="h-12 mt-2" />
                            <Skeleton count={1} className="h-5" />
                        </p>
                    </SkeletonTheme>
                ) : (
                    <MovieSlide movies={movies.theaterMovies} />
                )}
                <div className="section-divider"></div>
            </div>



            {/* ------ SINGLE Movies Section ------ */}
            <div className="section-container">
                <Link to='/phim-le/1' className="section-title-link">Phim lẻ</Link>
                {(!movies || !movies.singleMovies) ? (
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <p>
                            <Skeleton count={1} className="h-[250px] sm:h-[255px] md:h-[220px] min-[896px]:h-[170px] lg:h-[200px] xl:h-[230px]" />
                            <Skeleton count={1} className="h-12 mt-2" />
                            <Skeleton count={1} className="h-5" />
                        </p>
                    </SkeletonTheme>
                ) : (
                    <MovieSlide movies={movies.singleMovies} />
                )}
                <div className="section-divider"></div>
            </div>



            {/* ------ SERIES Movies Section ------ */}
            <div className="section-container">
                <Link to='/phim-bo/1' className="section-title-link">Phim bộ</Link>
                {(!movies || !movies.seriesMovies) ? (
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <p>
                            <Skeleton count={1} className="h-[250px] sm:h-[255px] md:h-[220px] min-[896px]:h-[170px] lg:h-[200px] xl:h-[230px]" />
                            <Skeleton count={1} className="h-12 mt-2" />
                            <Skeleton count={1} className="h-5" />
                        </p>
                    </SkeletonTheme>
                ) : (
                    <MovieSlide movies={movies.seriesMovies} />
                )}
                <div className="section-divider"></div>
            </div>



            {/* ------ CARTOON Movies Section ------ */}
            <div className="section-container">
                <Link to='/hoat-hinh/1' className="section-title-link">Hoạt hình</Link>
                {(!movies || !movies.cartoonMovies) ? (
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <p>
                            <Skeleton count={1} className="h-[250px] sm:h-[255px] md:h-[220px] min-[896px]:h-[170px] lg:h-[200px] xl:h-[230px]" />
                            <Skeleton count={1} className="h-12 mt-2" />
                            <Skeleton count={1} className="h-5" />
                        </p>
                    </SkeletonTheme>
                ) : (
                    <MovieSlide movies={movies.cartoonMovies} />
                )}
            </div>

        </div>
    );
};

export default Home;
