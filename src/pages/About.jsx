import useTitle from '../hooks/useTitle'
import logo from '../assets/logo.png';
import joyfilm from '../assets/joyfilm.png';
import sc1 from '../assets/sc1.png';
import sc2 from '../assets/sc2.png';
import sc3 from '../assets/sc3.png';
import { Link } from 'react-router-dom';
import IntroNewVersion from '../components/IntroNewVersion/IntroNewVersion'

const About = () => {

    useTitle(`Giới thiệu - JoyFilm`)


    return (
        <div className="page-container-0topside">

            <div className='section-container pt-3'>
                <IntroNewVersion />
            </div>

            <div className="section-container mt-6 flex flex-col md:flex-row">
                {/* ------ Logo ------ */}
                <div className='intro-left-section'>
                    <div className="h-full flex flex-col justify-center items-center">
                        <img src={logo} className="h-20 md:h-40" alt="Logo" />
                        <img src={joyfilm} className="h-12 mt-2 md:h-16 md:mt-4" alt="JoyFilm" />
                    </div>
                </div>

                {/* ------ Intro ------ */}
                <div className='intro-right-section'>
                    <h1 className='intro-title'>
                        Trải Nghiệm Xem Phim Trực Tuyến Miễn Phí, Chất Lượng Cao và Không Quảng Cáo.
                    </h1>
                    <p className='intro-paragraph'>
                        JoyFilm là một dự án Fullstack được tạo ra để kết hợp đam mê về lập trình và đam mê về điện ảnh. Website này không chỉ là một sản phẩm để thực hành kỹ năng, mà còn là một cơ hội để mang lại trải nghiệm xem phim tốt nhất cho người dùng.
                    </p>
                    <p className='intro-paragraph'>
                        JoyFilm hỗ trợ đa dạng thể loại phim, từ phim lẻ, phim bộ, đến phim chiếu rạp và phim hoạt hình anime. JoyFilm không ngừng phát triển để cung cấp thêm nhiều lựa chọn thú vị như phim hành động, tình cảm, phiêu lưu, TV show, và nhiều thể loại khác.
                    </p>
                </div>
            </div>

            <div className="section-container mt-3 flex flex-col md:flex-row">
                {/* ------ Logo ------ */}
                <div className='intro-left-section px-5 md:px-0 flex flex-col justify-center'>
                    <img
                        src={sc1}
                        loading='lazy'
                        className='w-2/3 min-[500px]:w-1/2 md:w-[80%] rounded-xl border' alt="Screenshot (133)" />
                    <img
                        src={sc2}
                        loading='lazy'
                        className='w-2/3 min-[500px]:w-1/2 -mt-[24%] md:w-[80%] md:-mt-[20%] rounded-xl border self-center' alt="Screenshot (134)" />
                    <img
                        src={sc3}
                        loading='lazy'
                        className='w-2/3 min-[500px]:w-1/2 -mt-[24%] md:w-[80%] md:-mt-[20%] rounded-xl border self-end' alt="Screenshot (135)" />
                </div>

                {/* ------ Intro ------ */}
                <div className='intro-right-section'>
                    <h1 className='intro-title'>Công nghệ sử dụng</h1>

                    <p className='intro-paragraph'>Front-end : HTML, CSS, JavaScript, ReactJS</p>
                    <div className='flex justify-start space-x-4 mt-3 mb-4'>
                        <img className='w-12 h-12' src="https://user-images.githubusercontent.com/63101932/202970551-1b33ac13-4c4e-45fd-842a-5a4755931366.svg" alt="html5" />
                        <img className='w-12 h-12' src="https://user-images.githubusercontent.com/63101932/202970636-4db0cb02-0322-46f5-b526-2cd2340fc7aa.svg" alt="css3" />
                        <img className='w-12 h-12' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" />
                        <img className='w-12 h-12' src="https://user-images.githubusercontent.com/63101932/202970811-0b3d696c-3c24-4bd9-a1b5-53f5d9f5dab6.svg" alt="react" />
                    </div>

                    <p className='intro-paragraph'>Back-end : NodeJS, ExpressJS</p>
                    <div className='flex justify-start space-x-4 mt-3 mb-4'>
                        <img className='w-12 h-12' src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="nodejs" />
                        <img className='w-12 h-12' src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="express" />
                    </div>

                    <p className='intro-paragraph'>Database : MongoDB</p>
                    <div className='flex justify-start space-x-4 mt-3 mb-4'>
                        <img className='w-12 h-12' src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongodb" />
                    </div>

                    <p className='intro-paragraph'>Deploy : Vercel (Front-end) và Netlify (Back-end)</p>

                    <p className='intro-paragraph'>Xem thêm chi tiết tại link repository bên dưới :</p>

                    <li className='intro-paragraph'>Front-end : <Link className='text-blue-500 underline underline-offset-4' to='https://github.com/dothenghia/JoyFilm-Web' target='_blank'>JoyFilm-Web</Link>
                    </li>
                    <li className='intro-paragraph'>Back-end : <Link className='text-blue-500 underline underline-offset-4' to='https://github.com/dothenghia/JoyFilm-Server' target='_blank'>JoyFilm-Server</Link>
                    </li>
                </div>
            </div>

            <div id='contact' className="section-container mt-3 flex flex-col md:flex-row pb-10">

                {/* ------ Logo ------ */}
                <div className='intro-left-section'>
                    <div className="flex flex-col justify-center items-center">
                        <img className='w-32 sm:w-48 rounded-full' src='https://avatars.githubusercontent.com/u/63101932' alt='avatar' />
                    </div>
                </div>

                {/* ------ Intro ------ */}
                <div className='intro-right-section'>
                    <h1 className='intro-title'>
                        Liên hệ
                    </h1>
                    <p className='intro-paragraph'>
                        Và tôi là Thế Nghĩa - admin của JoyFilm.
                    </p>
                    <p className='intro-paragraph'>
                        Bạn có thể liên hệ với tôi qua các kênh sau :
                    </p>
                    <li className='intro-paragraph'>
                        Facebook : <Link className='text-blue-500 underline underline-offset-4' to='https://www.facebook.com/thenghia.80' target='_blank'>Thế Nghĩa</Link>
                    </li>
                    <li className='intro-paragraph'>
                        Email : <Link className='text-blue-500 underline underline-offset-4' to='mailto:tnghia.dev@gmail.com' target='_blank'>tnghia.dev@gmail.com</Link>
                    </li>
                    <li className='intro-paragraph'>
                        Github : <Link className='text-blue-500 underline underline-offset-4' to='https://github.com/dothenghia' target='_blank'>dothenghia</Link>
                    </li>
                </div>
            </div>

        </div >
    );
};

export default About;
