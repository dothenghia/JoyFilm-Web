import logo from '../../assets/logo.png';
import joyfilm from '../../assets/joyfilm.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-stone-950 pt-6 pb-10 sm:py-8'>
            <div className='section-container-no-py flex flex-col-reverse sm:flex-row items-center justify-between'>
                <Link to="/" className="flex items-center mt-8 sm:mt-0">
                    <img src={logo} className="h-11 mr-2" alt="Logo" />
                    <img src={joyfilm} className="h-10" alt="JoyFilm" />
                </Link>
                <div className='flex w-full justify-evenly sm:w-auto items-center'>
                    <Link className='footer-link'>
                        Giới thiệu
                    </Link>
                    <Link to='https://github.com/dothenghia/JoyFilm-Web'
                        target='_blank'
                        className='footer-link'>
                        Github
                    </Link>
                    <Link to='https://github.com/dothenghia/JoyFilm-Server'
                        target='_blank'
                        className='footer-link'>
                        API
                    </Link>
                    <Link className='footer-link'>
                        Liên hệ
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
