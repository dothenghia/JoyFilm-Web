import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MovieCard from './MovieCard'

const MovieSlide = ({ movies }) => {
    console.log(movies)

    const slideRef = useRef(null)
    const nextMovie = () => {
        slideRef.current.slickNext()
    }

    const prevMovie = () => {
        slideRef.current.slickPrev()
    }

    // Setting for Movies Slide
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div className="movie-slide-container">

            {/* Movies Slide */}
            <Slider ref={slideRef} {...settings}>
                {movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie} />
                ))}
            </Slider>

            {/* Slide Control Button */}
            <div style={{ textAlign: "center" }}>
                <button onClick={prevMovie}>
                    Previous
                </button>
                <button onClick={nextMovie}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default MovieSlide;
