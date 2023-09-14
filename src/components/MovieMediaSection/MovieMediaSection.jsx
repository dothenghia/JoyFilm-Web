import { Link } from "react-router-dom";
import BlurBox from "../BlurBox/BlurBox";
import useTitle from '../../hooks/useTitle'

import { saveContext } from '../../contexts/saveContext';

import bm from '../../assets/bookmark.svg'
import bmfill from '../../assets/bookmark-fill.svg'
import { useContext } from "react";

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
    // console.log('[Movie] Media Render')
    const context = useContext(saveContext)

    const addToSaveList = (movie) => {
        context.toggleSaveMovie(movie)
    }

    useTitle(`${info.name} - Tập ${media[svIndex].server_data[epIndex].name || ""} | JoyFilm`)

    return (
        <div className="section-container pt-16 pb-32">

            {/* ------ Notify about the update schedule ------ */}
            <div className="rounded-lg overflow-hidden text-center">
                <BlurBox>
                    <div className="py-2 px-4 text-xs sm:text-sm text-subheading">
                        Phim sẽ được cập nhật mỗi tối Thứ 2, 4, 6 và Chủ nhật hàng tuần 🥰
                    </div>
                </BlurBox>
            </div>


            {/* ------ Movie Title Link ------ */}
            <Link to={`/phim/${info.slug}`} className="section-title-link block mt-8">
                {info.name}
            </Link>


            {/* ------ Media Player Section ------ */}
            <iframe
                className='aspect-video mx-auto mt-5 w-full'
                src={media[svIndex].server_data[epIndex].link_embed}
                loading='lazy'
                allowFullScreen={true}
                title="Video Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <div className="flex justify-end space-x-2 mt-3">
                <button className="feature-btn">Tắt đèn</button>
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
