
import MovieCard from './MovieCard'

const MovieSlide = ({ movies }) => {
    console.log(movies)

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard key={movie._id} movie={movie}/>
            ))}
        </div>
    );
};

export default MovieSlide;
