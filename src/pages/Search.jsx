import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import Controller from "../controllers/controller";

const Search = () => {

    // ------ Data State
    const [movies, setMovies] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    let name = searchParams.get('name')
    console.log(name)

    // ------ Fetching Data
    useEffect(() => {
        const fetchData = async () => {
            let data = await Controller('SEARCHMOVIE', name)
            console.log(data)
            setMovies(data)
        }

        fetchData()
    }, [name])

    return (
        <div id="search" className="bg-background w-full h-full pt-16">
            <div className="section-container">
                <h1 className="section-title-no-up"> Tìm kiếm : {name}</h1>

                <div className="mt-6 movies-grid">
                    {
                        movies && movies.map((movie, index) => (
                            <MovieCard key={index} movie={movie} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
