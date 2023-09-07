
import thumbnail1 from '../../assets/thumbnails/carousel1.jpg'
import thumbnail2 from '../../assets/thumbnails/carousel2.jpg'
import thumbnail3 from '../../assets/thumbnails/carousel3.jpg'
import thumbnail4 from '../../assets/thumbnails/carousel4.jpg'

import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './CarouselThumbnails.css'

const slideItems = [
    {
        id: 2,
        name: "NGƯỜI KIẾN VÀ CHIẾN BINH ONG: THẾ GIỚI LƯỢNG TỬ",
        original_name : 'Ant-Man and the Wasp: Quantumania',
        slug: "nguoi-kien-va-chien-binh-ong-the-gioi-luong-tu",
        poster_url: thumbnail1,
    },
    {
        id: 3,
        name: "XỨ SỞ CÁC NGUYÊN TỐ",
        original_name : 'Elemental',
        slug: "xu-so-cac-nguyen-to",
        poster_url: thumbnail2,
    },
    {
        id: 4,
        name: "NGƯỜI NHỆN: DU HÀNH VŨ TRỤ NHỆN",
        original_name : 'Spider-Man: Across the Spider-Verse',
        slug: "nguoi-nhen-du-hanh-vu-tru-nhen",
        poster_url: thumbnail3,
    },
    {
        id: 6,
        name: "ANH EM SUPER MARIO",
        original_name : 'The Super Mario Bros. Movie',
        slug: "anh-em-super-mario",
        poster_url: thumbnail4,
    }

]

const CarouselThumbnails = () => {

    return (
        <div id='carousel-thumbnails'>

            {/* Carousel wrapper */}
            <Carousel showArrows={false}
                showIndicators={false}
                stopOnHover={false}
                swipeable={true}
                // autoPlay={true}
                dynamicHeight={false}
                infiniteLoop={true}
                thumbWidth='20%'
            >
                {
                    slideItems.map((item) => (
                        <div key={item.id}>

                            {/* Carousel Thumbnail Image */}
                            <img src={item.poster_url} className='w-full h-full object-cover' />

                            {/* Carousel Legend Text */}
                            <div className='carousel-texts '>
                                {/* Title (Name) */}
                                <h1 className='block text-center md:text-left text-lg sm:text-2xl md:text-3xl font-semibold sm:font-bold text-text'>{item.name}</h1>

                                {/* 'Play' Button & 'Add to Watch List' Button */}
                                <div className='flex space-x-3 sm:space-x-4 md:space-x-6 mt-2 md:mt-3'>
                                    <Link className='bg-primary hover:bg-red-700 text-text text-sm sm:text-lg px-2 py-2 sm:px-3 md:px-4 md:py-3  md:text-lg flex items-center'>
                                        <svg className='mr-1 w-5 h-5 '
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                        Xem Phim
                                    </Link>
                                    <button className='bg-slate-200/20 border-2 hover:bg-slate-400 hover:border-slate-400 text-text text-sm sm:text-lg px-2 py-2 sm:px-3 md:px-4 md:py-3  md:text-lg flex items-center'>
                                        <svg className='mr-1 w-5 h-5 '
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" >
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
        </div>


    );
};

export default CarouselThumbnails;
