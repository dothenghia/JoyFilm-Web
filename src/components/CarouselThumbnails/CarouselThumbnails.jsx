
import thumbnail1 from '../../assets/thumbnails/carousel1.jpg'
import thumbnail2 from '../../assets/thumbnails/carousel2.jpg'
import thumbnail3 from '../../assets/thumbnails/carousel3.jpg'
import thumbnail4 from '../../assets/thumbnails/carousel4.jpg'

import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './CarouselThumbnails.scss'

import { useContext } from "react";
import { saveContext } from "../../contexts/saveContext";

const slideItems = [
    {
        id: 2,
        name: "Người Kiến Và Chiến Binh Ong: Thế Giới Lượng Tử",
        original_name: 'Ant-Man and the Wasp: Quantumania',
        slug: "nguoi-kien-va-chien-binh-ong-the-gioi-luong-tu",
        poster_url: thumbnail1,
        thumb_url: 'https://img.ophim9.cc/uploads/movies/nguoi-kien-va-chien-binh-ong-the-gioi-luong-tu-thumb.jpg',
    },
    {
        id: 3,
        name: "Xứ Sở Các Nguyên Tố",
        original_name: 'Elemental',
        slug: "xu-so-cac-nguyen-to",
        poster_url: thumbnail2,
        thumb_url: 'https://img.ophim9.cc/uploads/movies/xu-so-cac-nguyen-to-thumb.jpg',
    },
    {
        id: 4,
        name: "Người Nhện: Du Hành Vũ Trụ Nhện",
        original_name: 'Spider-Man: Across the Spider-Verse',
        slug: "nguoi-nhen-du-hanh-vu-tru-nhen",
        poster_url: thumbnail3,
        thumb_url: 'https://img.ophim9.cc/uploads/movies/nguoi-nhen-du-hanh-vu-tru-nhen-thumb.jpg',
    },
    {
        id: 6,
        name: "Anh Em Super Mario",
        original_name: 'The Super Mario Bros. Movie',
        slug: "anh-em-super-mario",
        poster_url: thumbnail4,
        thumb_url: 'https://img.ophim9.cc/uploads/movies/anh-em-super-mario-thumb.jpg',
    }

]

const CarouselThumbnails = () => {
    const context = useContext(saveContext)

    const addToSaveList = (movie) => {
        context.toggleSaveMovie(movie)
    }

    return (
        <>

            {/* ------ Carousel wrapper ------ */}
            <Carousel showArrows={false}
                showIndicators={false}
                stopOnHover={false}
                swipeable={true}
                autoPlay={true}
                dynamicHeight={false}
                infiniteLoop={true}
                thumbWidth='23%'
                transitionTime={800}
                interval={4000}
            >
                {
                    slideItems.map((item) => (
                        <div key={item.id}>

                            {/* ------ Carousel Thumbnail Image ------ */}
                            <img src={item.poster_url} loading='eager' className='w-full h-full object-cover' />

                            {/* ------ Carousel Legend Text ------ */}
                            <div className='carousel-texts '>
                                {/* ------ Title (Name) ------ */}
                                <h1 className='block text-center md:text-left text-lg sm:text-2xl md:text-3xl font-semibold sm:font-bold text-heading uppercase'>{item.name}</h1>

                                {/* ------ 'Play' Button & 'Add to Watch List' Button ------ */}
                                <div className='flex space-x-3 sm:space-x-4 md:space-x-6 mt-2 md:mt-3'>
                                    <Link to={`/phim/${item.slug}`}
                                        className='play-button-color text-heading
                                                text-sm min-[896px]:text-base min-[945px]:text-lg
                                                px-2 py-2 sm:px-3 md:px-4 md:py-3 flex items-center'>
                                        <svg className='mr-1 w-5 h-5 '
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                        Xem Phim
                                    </Link>
                                    <button
                                        onClick={() => { addToSaveList(item) }}
                                        className='add-button-color text-heading
                                                    text-sm min-[896px]:text-base min-[945px]:text-lg
                                                    px-2 py-2 sm:px-3 md:px-4 md:py-3 flex items-center'>
                                        <svg className='mr-1 w-5 h-5 '
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" >
                                            <line x1="12" y1="2" x2="12" y2="22"></line>
                                            <line x1="2" y1="12" x2="22" y2="12"></line>
                                        </svg>
                                        Thêm vào Danh sách
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </>


    );
};

export default CarouselThumbnails;
