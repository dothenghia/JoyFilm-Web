
import thumbnail1 from '../assets/thumbnails/thumbnail1.jpg'
import thumbnail2 from '../assets/thumbnails/thumbnail2.png'
import thumbnail3 from '../assets/thumbnails/thumbnail3.jpg'
import thumbnail4 from '../assets/thumbnails/thumbnail4.jpg'

import { Link } from 'react-router-dom'

const CarouselThumbnails = () => {

    return (

        <div id='thumnail-slider'>

            <div id="default-carousel" className="relative w-full z-0">

                {/* <!-- Carousel wrapper --> */}
                <div className="relative aspect-[16/9] overflow-hidden">
                    <div className="duration-500 ease" data-carousel-item>
                        <img src={thumbnail1}
                            alt="..."
                            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>

                </div>
            </div>
        </div>


    );
};

export default CarouselThumbnails;
