import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlurBox from '../BlurBox/BlurBox'
import useTitle from '../../hooks/useTitle'

const convertYouTubeUrl = (inputUrl) => {
    if (!inputUrl.includes("watch?v=")) {
        return inputUrl;
    }

    const videoId = inputUrl.split("watch?v=")[1];

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return embedUrl;
}

const TrailerFrame = ({ url }) => {
    if (!url.includes("youtube")) {
        return (
            <iframe
                className='aspect-video mx-auto w-full max-w-[700px]'
                src={url}
                loading='lazy'
                allowFullScreen={true}
                title="Video Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        )
    }

    return (
        <iframe
            className='aspect-video mx-auto w-full max-w-[700px]'
            src={convertYouTubeUrl(url)}
            allowFullScreen={true}
            loading='lazy'
            title="Video Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    )
}

const CategoryChip = ({ categories }) => {
    return (
        <div className="flex mt-2 min-[945px]:mt-3 space-x-3">
            {
                categories.map((category) => (
                    <div key={category.id} className="rounded-md overflow-hidden">
                        <BlurBox>
                            <div className='px-4 py-2 text-text font-light text-sm'>
                                {category.name}
                            </div>
                        </BlurBox>
                    </div>
                ))
            }
        </div>
    )
}

const RenderInformationArray = (array) => {
    if (array[0] === '') {
        return ' N/A'
    } else {
        return (
            array.map((item, index) => {
                return (
                    <span key={index}
                        className="movie-primary-text">
                        {` ${item}${(index === array.length - 1) ? '' : ','}`}
                    </span>
                )
            })
        )
    }
}

const MovieInfoSection = ({ info, media }) => {
    // console.log('[Movie] Info Render')

    useTitle(`${info.name} | JoyFilm`)

    const [showMore, setShowMore] = useState(false)

    return (
        <>

            {/* ------ Thumbnail & Brief Information ------ */}
            <div className="w-full overflow-hidden md:overflow-visible max-h-[500px] md:max-h-none md:aspect-[16/7] relative">
                {/* ------ Poster Background ------ */}
                <div className="aspect-[7/11] md:aspect-[16/7]">
                    <img src={info.poster_url} loading='eager' className='hidden md:block w-full h-full object-cover brightness-[25%]' />
                    <img src={info.thumb_url} loading='eager' className='md:hidden w-full h-full object-cover blur-sm brightness-[50%] -translate-y-[1/5]' />
                </div>

                {/* ------ Information Container ------ */}
                <div className="absolute z-10 top-0 left-0 h-full w-full">
                    <div className="h-full section-container-no-py flex flex-col md:flex-row justify-center items-center">
                        {/* ------ Image Thumnail ------ */}
                        <div className="h-[90%] md:h-full aspect-[9/16]
                                    pb-4 md:pb-0 lg:pb-10 xl:pb-20 pt-16 md:pt-[74px] lg:pt-20
                                    flex justify-center md:justify-end">
                            <img src={info.thumb_url} loading='eager' className='h-full rounded-2xl object-cover' />
                        </div>

                        {/* ------ Brief Information for Medium & Large screen------ */}
                        <div className="hidden md:block self-end 
                                    md:pb-0 lg:pb-10 xl:pb-20 pl-8 lg:pr-2 xl:pr-7">
                            <h1 className="movie-name">{info.name}</h1>
                            <h2 className="movie-origin-name">{info.origin_name}</h2>
                            <p className="movie-normal-text">{info.time}</p>
                            <p className="movie-normal-text">Trạng thái :
                                <span className="movie-primary-text text-lg font-bold"> {info.episode_current}</span>
                            </p>

                            <CategoryChip categories={info.category} />

                            {/* ------ 'Xem' Button & 'Them vao danh sach' Button ------ */}
                            <div className='flex space-x-4 mt-4 min-[945px]:mt-5'>
                                <Link to={`?sv=0&tap=0`}

                                    className='play-button-color text-heading 
                                    text-sm min-[896px]:text-base min-[945px]:text-lg
                                    px-2 py-2 sm:px-3 md:px-4 md:py-2 flex items-center'>
                                    <svg className='mr-1 w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <polygon points="5 3 19 12 5 21 5 3"></polygon> </svg>
                                    Xem Phim
                                </Link>
                                <button className='add-button-color text-heading 
                                    text-sm min-[896px]:text-base min-[945px]:text-lg
                                    px-2 py-2 sm:px-3 md:px-4 md:py-2 flex items-center'>
                                    <svg className='mr-1 w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" > <line x1="12" y1="2" x2="12" y2="22"></line> <line x1="2" y1="12" x2="22" y2="12"></line> </svg>
                                    Thêm vào Danh sách
                                </button>
                            </div>

                            <p className='movie-normal-text mt-3 -mb-1 line-clamp-2' dangerouslySetInnerHTML={{ __html: info.content }} />
                        </div>

                        {/* ------ 'Xem' Button & 'Them vao danh sach' Button for Small screen ------ */}
                        <div className='md:hidden flex space-x-4 pb-2'>
                            <Link to={`?sv=0&tap=0`}

                                className='bg-primary text-heading text-sm px-2 py-2 sm:px-3 flex items-center'>
                                <svg className='mr-1 w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <polygon points="5 3 19 12 5 21 5 3"></polygon> </svg>
                                Xem Phim
                            </Link>
                            <button className='add-button-color text-heading text-sm px-2 py-2 sm:px-3 flex items-center'>
                                <svg className='mr-1 w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" > <line x1="12" y1="2" x2="12" y2="22"></line> <line x1="2" y1="12" x2="22" y2="12"></line> </svg>
                                Thêm vào Danh sách
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='h-28 lg:h-32 xl:h-40 z-0 -translate-y-[99%] bg-gradient-to-t from-background from-0% to-transparent to-100%'></div>


            {/* ------ Detail Information ------ */}
            <div className="section-container px-8 pb-20 -mt-[86px] lg:-mt-32 xl:-mt-40">
                <h1 className='hidden md:block section-title mb-1 min-[945px]:mb-2'>Thông tin phim</h1>

                <h1 className="md:hidden movie-name">{info.name}</h1>
                <h2 className="md:hidden movie-origin-name">{info.origin_name}</h2>

                <p className="movie-normal-text">Trạng thái :
                    <span className="movie-primary-text text-lg font-bold"> {info.episode_current}</span>
                </p>
                <p className="movie-normal-text">Thời lượng : {info.time}</p>
                <p className="movie-normal-text">Đạo diễn : {RenderInformationArray(info.director)}</p>
                <p className="movie-normal-text">Diễn viên : {RenderInformationArray(info.actor)}</p>
                <p className="movie-normal-text">Thể loại :
                    {info.category.map((category, index) => {
                        return (
                            <span key={index} className="movie-primary-text">
                                {` ${category['name']}${(index === info.category.length - 1) ? '' : ','}`}
                            </span>
                        )
                    })}
                </p>
                <p className="movie-normal-text">Quốc gia : <span className="movie-primary-text">{info.country[0]['name']}</span></p>
                <p className="movie-normal-text">Năm sản xuất : <span className="movie-primary-text">{info.year}</span></p>
                <div className="movie-normal-text">Nội dung :
                    <p className={`movie-normal-text mt-1 mb-0  ${showMore ? '' : 'line-clamp-1'}`} dangerouslySetInnerHTML={{ __html: info.content }} />
                    <button className="text-secondary underline underline-offset-2" onClick={() => { setShowMore(!showMore) }}>{showMore ? 'Ẩn bớt' : 'Xem thêm'}</button>
                </div>


                <h1 className='section-title mt-6 mb-1 min-[945px]:mb-2'>Trailer</h1>

                {
                    (info.trailer_url == "") ?
                        (
                            <p className="movie-normal-text">Không tìm thấy Trailer cho phim này</p>
                        ) :
                        (
                            <TrailerFrame url={info.trailer_url} />
                        )
                }


            </div>


        </>
    );
};

export default MovieInfoSection;
