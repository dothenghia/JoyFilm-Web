import { Link } from "react-router-dom";

import BlurBox from "./BlurBox";
import logo from '../assets/logo.png';
import joyfilm from '../assets/joyfilm.png';
// import { Flowbite } from "flowbite-react";

const Header = () => {
    return (
        <div>
            <nav className="bg-transparent fixed w-full z-20 top-0 left-0">
                <BlurBox>
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        <div className="flex">
                            <Link to="/" className="flex items-center p-3">
                                <img src={logo} className="h-8 mr-2" alt="Logo" />
                                <img src={joyfilm} className="h-7" alt="JoyFilm" />
                            </Link>

                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                                <div className="relative mx-5 mt-3 md:hidden">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-md text-text rounded-lg border-none bg-black/50 placeholder:text-subheading" placeholder="Search..." />
                                </div>

                                <div className="font-medium flex flex-col pl-2 md:pl-0 mt-4 mb-2 md:mb-0 md:flex-row md:space-x-0 md:mt-0">
                                    <Link to="/phim-moi" className="header-link">Phim mới</Link>
                                    <Link to="/chieu-rap" className="header-link">Phim chiếu rạp</Link>
                                    <Link to="/phim-le" className="header-link hidden min-[787px]:block">Phim lẻ</Link>
                                    <Link to="/phim-bo" className="header-link hidden min-[880px]:block">Phim bộ</Link>
                                    <Link to="/hoat-hinh" className="header-link hidden min-[990px]:block">Hoạt hình</Link>
                                </div>
                            </div>
                        </div>



                        <div className="flex md:order-2">
                            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-heading hover:bg-gradient-to-r from-red-500 to-pink-500 rounded-lg text-sm p-2.5 mr-2" >
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>


                            <div className="relative hidden md:block  mr-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-md text-text rounded-lg border-none bg-black/50 placeholder:text-subheading" placeholder="Search..." />
                            </div>


                            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex rounded-lg md:hidden items-center mr-4 p-2 w-10 h-10 justify-center text-sm text-heading border-[3px]" aria-controls="navbar-search" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>

                        <div className="items-center justify-between hidden w-full md:hidden md:w-auto md:order-1" id="navbar-search">
                            <div className="relative mx-5 mt-3 md:hidden">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-md text-text rounded-lg border-none bg-black/50 placeholder:text-subheading" placeholder="Search..." />
                            </div>

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

