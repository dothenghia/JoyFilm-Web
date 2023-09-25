import { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import Controller from "../controllers/controller";
import { Link } from "react-router-dom";
import useTitle from '../hooks/useTitle'
import SkeletonGrid from "../components/SkeletonGrid/SkeletonGrid";
import IntroNewVersion from '../components/IntroNewVersion/IntroNewVersion'

const Search = () => {

    // ------ Data State
    const [searchParams, setSearchParams] = useSearchParams()
    let name = searchParams.get('name')
    const [searchInput, setSearchInput] = useState((name || ""))

    if (!name) {
        useTitle(`Tìm kiếm | JoyFilm`)
    } else {
        useTitle(`Tìm kiếm - "${name}" | JoyFilm`)
    }

    const [movies, setMovies] = useState(null)
    const searchInputDOM = useRef(null)
    const navigate = useNavigate()

    // ------ Fetching Data
    useEffect(() => {
        const fetchData = async () => {
            setMovies(null)
            let data = await Controller('SEARCHMOVIE', name)
            setMovies(data)
        }

        fetchData()
    }, [name])


    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            navigate(`/tim-kiem?name=${searchInput}`)
        }
    }


    return (
        <div id="search" className="page-container-0topside">
            <div className="section-container">

                <IntroNewVersion />

                <h1 className="section-title-no-up">Tìm kiếm : "{name}"</h1>

                <div className="relative flex mt-4">
                    <Link
                        to={`/tim-kiem?name=${searchInput}`}
                        className="absolute inset-y-0 right-0 flex items-center px-3"
                    >
                        <svg className="w-4 h-4 text-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" /> </svg>
                    </Link>

                    <input type="text"
                        className="block w-full p-2 pl-4 text-md text-text rounded-lg border-none bg-black/50 placeholder:text-subheading"
                        placeholder="Nhập tên phim..."
                        value={searchInput}
                        onChange={(e) => { setSearchInput(e.target.value) }}
                        onKeyDown={keyDownHandler}
                        required
                        autoComplete="true"
                        ref={searchInputDOM}
                    />
                </div>

                {
                    (!movies) ?
                        (
                            <>
                                <SkeletonGrid />
                                <SkeletonGrid />
                                <SkeletonGrid />
                                <SkeletonGrid />
                            </>
                        ) :
                        (
                            <div className="mt-6 movies-grid">
                                {movies.map((movie, index) => (
                                    <MovieCard key={index} movie={movie} />
                                ))}
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default Search;
