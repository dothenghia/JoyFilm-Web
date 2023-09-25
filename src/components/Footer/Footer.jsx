import logo from '../../assets/logo.png';
import joyfilm from '../../assets/joyfilm.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className='bg-stone-950 pt-6 pb-10 sm:py-8'>
            <div className='section-container-no-py flex flex-col-reverse sm:flex-row items-center justify-between'>
                <Link to="/" className="flex items-center mt-8 sm:mt-0">
                    <img src={logo} className="h-11 mr-2" alt="Logo" />
                    <img src={joyfilm} className="h-10" alt="JoyFilm" />
                </Link>
                <div className='flex flex-col sm:flex-row w-full justify-evenly sm:w-auto items-center'>
                    <Link to='/gioi-thieu' className='footer-link'>Giới thiệu</Link>
                    <Link to='https://myjoyfilm.vercel.app/' target='_blank' className='footer-link font-medium text-secondary hover:text-secondary'>Phiên bản mới</Link>
                    <Link to='https://github.com/dothenghia/JoyFilm-Web' target='_blank' className='footer-link'>Github</Link>
                    <Link to='https://github.com/dothenghia/JoyFilm-Server' target='_blank' className='footer-link'>API</Link>
                    <HashLink smooth to='/gioi-thieu#contact' className='footer-link'>Liên hệ</HashLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;
