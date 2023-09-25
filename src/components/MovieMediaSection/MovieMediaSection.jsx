import { Link } from "react-router-dom";
import BlurBox from "../BlurBox/BlurBox";
import useTitle from '../../hooks/useTitle'
import ReactPlayer from "react-player";

import { saveContext } from '../../contexts/saveContext';

import bm from '../../assets/bookmark.svg'
import bmfill from '../../assets/bookmark-fill.svg'
import { useContext, useState } from "react";
import IntroNewVersion from '../IntroNewVersion/IntroNewVersion'

const EpisodeButtons = ({ media, epIndex, svIndex }) => {
    return (
        <div className="px-3 pt-3 pb-3 rounded-b-xl border-2 border-t-0 border-border">
            {
                media[svIndex].server_data.map((episode, index) => {
                    return (
                        <Link key={index}
                            to={`?sv=${svIndex}&tap=${index}`}
                            className={`episode-btn ${'' + index === epIndex && "episode-btn-active"}`}
                        >
                            {episode.name}
                        </Link>
                    )
                })
            }
        </div>
    )
}


const ServerTabs = ({ media, svIndex }) => {
    return (
        <ul className="flex flex-wrap mt-5 sm:mt-2 text-center border-b-2 border-gray-200">
            {
                media.map((server, index) => (
                    <Link to={`?sv=${index}&tap=0`} // Go to the first Episode of Server
                        key={index}
                        className={`mr-2 server-tab ${'' + index === svIndex && "server-tab-active"}`}
                    >
                        {server.server_name}
                    </Link>
                ))
            }
        </ul>
    )
}


const MovieMediaSection = ({ info, media, epIndex, svIndex }) => {
    const [player, setPlayer] = useState(true)
    const context = useContext(saveContext)

    const addToSaveList = (movie) => {
        context.toggleSaveMovie(movie)
    }

    useTitle(`${info.name} - Tập ${media[svIndex].server_data[epIndex].name || ""} | JoyFilm`)

    return (
        <div className="section-container pt-16 pb-32">

            {/* ------ Notify about the New Version ------ */}
            <IntroNewVersion/>


            {/* ------ Movie Title Link ------ */}
            <Link to={`/phim/${info.slug}`} className="section-title-link block mt-4">
                {info.name}
            </Link>


            {/* ------ Media Player Section ------ */}
            {
                player ?
                    (
                        <iframe
                            className='aspect-video mx-auto mt-5 w-full'
                            src={media[svIndex].server_data[epIndex].link_embed}
                            loading='lazy'
                            allowFullScreen={true}
                            title="Video Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    ) :
                    (
                        <div className='aspect-video mx-auto mt-5 w-full bg-black'>
                            <ReactPlayer
                                width={'100%'}
                                height={'100%'}
                                url={media[svIndex].server_data[epIndex].link_m3u8}
                                playsinline={true}
                                pip={true}
                                stopOnUnmount={false}
                                controls={true}
                            />
                        </div>
                    )
            }



            <div className="flex justify-end items-center space-x-2 mt-3">
                <div className="relative group">
                    <span class="hidden group-hover:block
                            absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-48 sm:w-64
                            text-center rounded-lg p-2 bg-gray-700 text-text text-xs
                            after:content-[''] after:absolute after:bottom-full after:left-1/2
                            after:-translate-x-1/2 after:border-gray-700 after:w-0 after:h-0
                            after:border-l-[6px] after:border-l-transparent
                            after:border-r-[6px] after:border-r-transparent
                            after:border-b-[6px]
                    ">
                        Gợi ý: Hãy đổi player nếu bạn không thích thanh tiến trình màu đỏ góc dưới màn hình
                    </span>
                    <svg className="w-[22px] h-[22px]" viewBox="0 0 48.00 48.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" strokeWidth="0.00048000000000000007"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>information-circle</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2Zm0,40A18,18,0,1,1,42,24,18.1,18.1,0,0,1,24,42Z"></path> <path d="M24,20a2,2,0,0,0-2,2V34a2,2,0,0,0,4,0V22A2,2,0,0,0,24,20Z"></path> <circle cx="24" cy="14" r="2"></circle> </g> </g> </g></svg>
                </div>
                <button className="feature-btn"
                    onClick={() => { setPlayer(!player) }}
                >
                    <svg className="w-[16px] h-[16px] mr-1" viewBox="0 0 48.00 48.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" strokeWidth="0.00048000000000000007"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>swap-horizontal</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <g> <path d="M33.5,23.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L35.2,31H8a2,2,0,0,0,0,4H35.2l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l7.9-8a1.9,1.9,0,0,0,0-2.8Z"></path> <path d="M14.5,24.4a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L12.8,17H40a2,2,0,0,0,0-4H12.8l4.6-4.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-7.9,8a1.9,1.9,0,0,0,0,2.8Z"></path> </g> </g> </g> </g></svg>
                    Đổi player
                </button>
                <button className="feature-btn"
                    onClick={() => { addToSaveList(info) }}
                >
                    {
                        (context.isSaved(info) ? (
                            <>
                                <div className='h-full flex items-center'>
                                    <img src={bmfill} className="w-[14px] h-[14px] mr-1" alt="Bookmark" />
                                </div>
                                Đã lưu
                            </>
                        ) : (
                            <>
                                <div className='h-full flex items-center'>
                                    <img src={bm} className="w-[14px] h-[14px] mr-1" alt="Bookmark" />
                                </div>
                                Lưu phim
                            </>
                        ))
                    }
                </button>
            </div>


            {/* ------ Server Tabs ------ */}
            <ServerTabs media={media} svIndex={svIndex} />


            {/* ------ Episode Buttons ------ */}
            <EpisodeButtons media={media} epIndex={epIndex} svIndex={svIndex} />


        </div>
    );
};

export default MovieMediaSection;
