import { Link } from 'react-router-dom';
import BlurBox from '../BlurBox/BlurBox'

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

const MovieInfoSection = ({ info }) => {
    console.log(info)

    return (
        <div>



            <div className="w-full overflow-hidden md:overflow-visible max-h-[500px] md:max-h-none md:aspect-[16/7] relative">
                {/* Poster Background */}
                <div className="aspect-[7/11] md:aspect-[16/7]">
                    <img src={info.poster_url} className='hidden md:block w-full h-full object-cover brightness-[50%]' />
                    <img src={info.thumb_url} className='md:hidden w-full h-full object-cover blur-sm brightness-[60%] -translate-y-[1/5]' />
                </div>

                {/* Information Container */}
                <div className="absolute z-10 top-0 left-0 h-full w-full">
                    <div className="h-full section-container-no-py flex flex-col md:flex-row justify-center items-center">
                        {/* ------ Image Thumnail ------ */}
                        <div className="h-[90%] md:h-full aspect-[9/16] pb-4 md:pb-0 pt-16 md:pt-[74px] lg:pt-20 xl:pb-10 flex justify-center md:justify-end">
                            <img src={info.thumb_url} className='h-full rounded-2xl object-cover' />
                        </div>


                        {/* ------ Brief Information ------ */}
                        <div className="hidden md:block self-end xl:pb-10 pl-8 lg:pr-2 xl:pr-7">
                            <h1 className="movie-name">{info.name}</h1>
                            <h2 className="movie-origin-name">{info.origin_name}</h2>
                            <p className="movie-normal-text">{info.time}</p>
                            <p className="movie-normal-text">Trạng thái :
                                <span className="text-blue-500 text-lg font-bold"> {info.episode_current}</span>
                            </p>

                            <CategoryChip categories={info.category} />

                            {/* ------ 'Xem' Button & 'Them vao danh sach' Button ------ */}
                            <div className='flex space-x-4 mt-4 min-[945px]:mt-5'>
                                <Link className='bg-primary hover:bg-red-700 text-text 
                                    text-sm min-[896px]:text-base min-[945px]:text-lg lg:text-xl
                                    px-2 py-2 sm:px-3 md:px-4 md:py-2 flex items-center'>
                                    <svg className='mr-1 w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <polygon points="5 3 19 12 5 21 5 3"></polygon> </svg>
                                    Xem Phim
                                </Link>
                                <button className='bg-slate-200/20 border-2 hover:bg-slate-400 hover:border-slate-400 text-text 
                                    text-sm min-[896px]:text-base min-[945px]:text-lg lg:text-xl
                                    px-2 py-2 sm:px-3 md:px-4 md:py-2 flex items-center'>
                                    <svg className='mr-1 w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" > <line x1="12" y1="2" x2="12" y2="22"></line> <line x1="2" y1="12" x2="22" y2="12"></line> </svg>
                                    Thêm vào Danh sách
                                </button>
                            </div>

                            <p className='movie-normal-text mt-3 -mb-1 line-clamp-2' dangerouslySetInnerHTML={{ __html: info.content }} />
                        </div>

                        {/* ------ 'Xem' Button & 'Them vao danh sach' Button ------ */}
                        <div className='md:hidden flex space-x-4 pb-2'>
                            <Link className='bg-primary text-text text-sm px-2 py-2 sm:px-3 flex items-center'>
                                <svg className='mr-1 w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <polygon points="5 3 19 12 5 21 5 3"></polygon> </svg>
                                Xem Phim
                            </Link>
                            <button className='bg-slate-200/20 border-2 text-text text-sm px-2 py-2 sm:px-3 flex items-center'>
                                <svg className='mr-1 w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" > <line x1="12" y1="2" x2="12" y2="22"></line> <line x1="2" y1="12" x2="22" y2="12"></line> </svg>
                                Thêm vào Danh sách
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='h-28 md:h-40 z-0 -translate-y-[99%] bg-gradient-to-t from-background from-0% to-transparent to-100%'></div>

            {/* ------ Detail Information ------ */}
            <div className="md:hidden section-container -mt-28">
                <h1 className="movie-name">{info.name}</h1>
                <h2 className="movie-origin-name">{info.origin_name}</h2>
                <p className="movie-normal-text">{info.time}</p>
                <p className="movie-normal-text">Trạng thái :
                    <span className="text-blue-500 text-lg font-bold"> {info.episode_current}</span>
                </p>


                <p className='movie-normal-text mt-3 -mb-1 line-clamp-2' dangerouslySetInnerHTML={{ __html: info.content }} />
            </div>


        </div>
    );
};

export default MovieInfoSection;