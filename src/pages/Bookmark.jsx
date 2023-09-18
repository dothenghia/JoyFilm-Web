import { useContext } from "react";
import { saveContext } from '../contexts/saveContext';
import MovieCard from "../components/MovieCard/MovieCard";
import useTitle from '../hooks/useTitle'

const Bookmark = () => {
    const context = useContext(saveContext)
    // console.log(context.saveList)

    useTitle(`Phim đã lưu (${context.saveList.length}) - JoyFilm`)

    return (
        <div id="series" className="page-container-0topside">
            <div className="section-container">
                <h1 className="section-title-no-up">Phim đã lưu ({context.saveList.length})</h1>

                <div className="mt-6 movies-grid">
                    {context.saveList.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Bookmark;
