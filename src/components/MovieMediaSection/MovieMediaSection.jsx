import { Link } from "react-router-dom";
import BlurBox from "../BlurBox/BlurBox";

const EpisodeButtons = ({ server, epSlug, svIndex }) => {
    return (
        <div className="w-full flex flex-wrap px-4 pt-2 pb-4 rounded-b-md border-2 border-t-0 border-border">
            {
                server.server_data.map((episode, index) => {
                    return (
                        <Link key={index}
                            to={`?sv=${svIndex}&tap=${episode.slug}`}
                            className={`episode-btn ${episode.slug === epSlug ? "episode-btn-active" : ""}`}
                        >
                            {episode['name']}
                        </Link>
                    )
                })
            }
        </div>
    )
}


const ServerTabs = ({ media, svIndex }) => {
    return (
        <ul className="flex flex-wrap text-center border-b-2 border-gray-200">
            {
                media.map((server, index) => (
                    <Link to={`?sv=${index}&tap=${server.server_data[0].slug}`} // Go to the first Episode of Server
                        key={index}
                        className={`mr-2 server-tab ${'' + index === svIndex ? "server-tab-active" : ""}`}
                    >
                        {server.server_name}
                    </Link>
                ))
            }
        </ul>
    )
}



const MovieMediaSection = ({ info, media, epSlug, svIndex }) => {
    console.log('[Movie] Media Render')
    console.log(media)

    return (
        <div className="section-container pt-16 pb-32">

            {/* Notify about the update movie schedule */}
            <div className="w-full max-w-screen-md mx-auto rounded-lg overflow-hidden text-center text-subheading">
                <BlurBox>
                    <div className="py-2 ">
                        Phim sẽ được cập nhật mỗi tối Thứ 2, Thứ 4, Thứ 6 và Chủ nhật hàng tuần 🥰
                    </div>
                </BlurBox>
            </div>



            <Link to={`/phim/${info.slug}`} className="section-title-link">
                {info.name}
            </Link>


            {/* Server Tabs */}
            <ServerTabs media={media} svIndex={svIndex} />


            {/* Episode Buttons */}
            <EpisodeButtons server={media[svIndex]} epSlug={epSlug} svIndex={svIndex} />



        </div>
    );
};

export default MovieMediaSection;
