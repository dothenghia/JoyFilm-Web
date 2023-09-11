import { useRef } from "react";

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MovieSlide.css'

import MovieCard from '../MovieCard/MovieCard'

const MovieSlide = ({ movies }) => {
    // console.log(movies)

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
        lazyLoad: true,
        arrows: false,
        infinite: true,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
        speed: 400,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '25px',
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1600,
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
                breakpoint: 896,
                settings: {
                    slidesToShow: 4,
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
        <div className="relative -ml-4 mt-4">
        
            {/* Slide Control Buttons */}
            <div className="absolute right-2 -top-10 flex items-center justify-end">
                <button className="group" onClick={prevMovie}>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-heading group-hover:text-secondary rotate-180 mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <polygon points="5 3 19 12 5 21 5 3"></polygon> </svg>
                </button>
                
                <button className="group" onClick={nextMovie}>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-heading group-hover:text-secondary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <polygon points="5 3 19 12 5 21 5 3"></polygon> </svg>
                </button>
            </div>

            {/* Movies Slide */}
            <Slider ref={slideRef} {...settings}>
                {movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie} />
                ))}
            </Slider>

        </div>
    );
};

export default MovieSlide;
