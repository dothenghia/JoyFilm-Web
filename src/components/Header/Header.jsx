import { Link } from "react-router-dom";

import BlurBox from "../BlurBox/BlurBox";
import logo from '../../assets/logo.png';
import joyfilm from '../../assets/joyfilm.png';

const Header = () => {

    // ------ Event Handlers
    const toggleNavbar = () => {
        document.querySelector('#navbar-search').classList.toggle('hidden')
    }

    return (
        <div id="header">

            {/* ------ Header Navigation bar ------ */}
            <nav className="bg-transparent fixed w-full z-20 top-0 left-0 shadow-[inset_0px_14px_20px_-10px_rgba(0,0,0,0.7)]" >
                <BlurBox>
                    <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
                        
                        {/* ------ Header Left Content ------ */}
                        <div className="flex">

                            {/* ------ Logo ------ */}
                            <Link to="/" className="flex items-center py-3 px-4">
                                <img src={logo} className="h-8 mr-2" alt="Logo" />
                                <img src={joyfilm} className="h-7" alt="JoyFilm" />
                            </Link>

                            {/* ------ Navigation Links ------ */}
                            <div className="hidden md:flex flex-row">
                                <Link to="/phim-moi" className="header-link">Phim mới</Link>
                                <Link to="/chieu-rap" className="header-link">Phim chiếu rạp</Link>
                                <Link to="/phim-le" className="header-link hidden min-[787px]:block">Phim lẻ</Link>
                                <Link to="/phim-bo" className="header-link hidden min-[880px]:block">Phim bộ</Link>
                                <Link to="/hoat-hinh" className="header-link hidden min-[990px]:block">Hoạt hình</Link>
                            </div>

                        </div>


                        {/* ------ Header Right Content ------ */}
                        <div className="flex">

                            {/* ------ Seach Input ------ */}
                            <div className="relative hidden md:flex mr-5">
                                <Link
                                    to='/tim-kiem'
                                    className="absolute inset-y-0 right-0 flex items-center px-3">
                                    <svg className="w-4 h-4 text-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </Link>
                                <input type="text" id="search-navbar" className="block w-full p-2 pl-4 text-md text-text rounded-lg border-none bg-black/50 placeholder:text-subheading" placeholder="Tìm kiếm..." />
                            </div>

                            {/* ------ Hamburger Button ------ */}
                            <button data-collapse-toggle="navbar-search" type="button"
                                aria-controls="navbar-search" aria-expanded="false"
                                onClick={toggleNavbar}
                                className="inline-flex rounded-lg md:hidden items-center mr-4 p-2 w-10 h-10 justify-center text-sm text-heading border-[3px] hover:bg-gradient-to-r from-red-500 to-pink-500" >
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>


                        {/* ------ Header Responsive Content when click the Hamburger Button ------ */}
                        <div id="navbar-search"
                            className="items-center justify-between w-full hidden md:hidden md:w-auto md:order-1">

                            {/* ------ Search Input ------ */}
                            <div className="ml-5 mr-3 mt-3 md:hidden flex">
                                <input type="text" id="search-navbar" className="block w-full p-2 pl-4 text-md text-text rounded-lg border-none bg-black/50 placeholder:text-subheading" placeholder="Tìm kiếm..." />
                                <Link
                                    to='/tim-kiem'
                                    className="flex items-center px-3">
                                    <svg className="w-4 h-4 text-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </Link>
                            </div>

                            {/* ------ Navigation Links ------ */}
                            <div className="font-medium flex flex-col pl-2 md:pl-0 mt-4 mb-2 md:mb-0 md:flex-row md:space-x-0 md:mt-0">
                                <Link to="/phim-moi" className="header-link">Phim mới</Link>
                                <Link to="/chieu-rap" className="header-link">Phim chiếu rạp</Link>
                                <Link to="/phim-le" className="header-link">Phim lẻ</Link>
                                <Link to="/phim-bo" className="header-link">Phim bộ</Link>
                                <Link to="/hoat-hinh" className="header-link">Hoạt hình</Link>
                            </div>
                        </div>


                    </div>
                </BlurBox>
            </nav>

        </div>
    );
};

export default Header;

