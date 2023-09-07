

const MovieCard = ({ movie }) => {
    return (
        <div
            className='w-full bg-purple-500'
        >

                <h2 className="text-heading line-clamp-1">
                    {movie.name}
                </h2>


        </div>
    );
};

export default MovieCard;
