const Carousel = ({ topFilms }) => {
    console.log('[Carousel] Render')

    return (
        <div style={{ backgroundColor: 'salmon' }}>
            <h3>
                CAROUSELLLLLLLLLLL
            </h3>
            {
                topFilms.map((film, index) => {
                    return (<p key={film}>{film}</p>)
                })
            }
        </div>
    );
};

export default Carousel;
