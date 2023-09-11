import { Link } from "react-router-dom";

import BlurBox from "../BlurBox/BlurBox";
import logo from '../../assets/logo.png';
import joyfilm from '../../assets/joyfilm.png';
import { useRef, useState } from "react";

const Header = () => {
    const [searchInput, setSearchInput] = useState('')
    const searchInputDOM = useRef(null)

    // ------ Event Handlers
    const toggleNavbar = () => {
        document.querySelector('#navbar-search').classList.toggle('hidden')
    }

    return (
        <div id="header">

            {/* ------ Header Navigation bar ------ */}
            <nav className="bg-transparent fixed w-full z-20 top-0 left-0 shadow-[inset_0px_14px_20px_-10px_rgba(0,0,0,0.7)]" >
                <BlurBox>
                    <div className="section-container-no-py flex flex-wrap items-center justify-between">

                        {/* ------ Header Left Content ------ */}
                        <div className="flex">

                            {/* ------ Logo ------ */}
                            <Link to="/" className="flex items-center py-3">
                                <img src={logo} className="h-8 mr-2" alt="Logo" />
                                <img src={joyfilm} className="h-7" alt="JoyFilm" />
                            </Link>

                            {/* ------ Navigation Links ------ */}
                            <div className="hidden lg:flex flex-row">
                                <Link to="/phim-moi/1" className="header-link">Phim mới</Link>
                                <Link to="/chieu-rap/1" className="header-link">Phim chiếu rạp</Link>
                                <Link to="/phim-le/1" className="header-link">Phim lẻ</Link>
                                <Link to="/phim-bo/1" className="header-link">Phim bộ</Link>
                                <Link to="/hoat-hinh/1" className="header-link">Hoạt hình</Link>
                            </div>

                        </div>


                        {/* ------ Header Right Content ------ */}
                        <div className="flex">

                            {/* ------ Seach Input ------ */}
                            <div className="relative hidden lg:flex">
                                <Link
                                    to={`/tim-kiem?name=${searchInput}`}
                                    className="absolute inset-y-0 right-0 flex items-center px-3">
                                    <svg className="w-4 h-4 text-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </Link>
                                <input type="text"
                                    className="block w-full p-2 pl-4 text-md text-text rounded-lg border-none bg-black/50 placeholder:text-subheading"
                                    placeholder="Tìm kiếm..."
                                    value={searchInput}
                                    onChange={(e) => { setSearchInput(e.target.value) }}
                                    required
                                    autoComplete="true"
                                    ref={searchInputDOM}
                                />
                            </div>

                            {/* ------ Hamburger Button ------ */}
                            <button data-collapse-toggle="navbar-search" type="button"
                                aria-controls="navbar-search" aria-expanded="false"
                                onClick={toggleNavbar}
                                className="inline-flex rounded-lg lg:hidden items-center p-2 w-10 h-10 justify-center
                                text-sm text-heading border-[2px] hover:bg-gradient-to-br from-cyan-500 to-indigo-500" >
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>


                        {/* ------ Header Responsive Content when click the Hamburger Button ------ */}
                        <div id="navbar-search"
                            className="items-center justify-between w-full hidden lg:hidden lg:w-auto lg:order-1">

                            {/* ------ Search Input ------ */}
                            <div className="ml-4 mt-3 lg:hidden flex">
                                <input type="text"
                                    className="block w-full p-2 pl-4 text-md text-text rounded-lg border-none bg-black/50 placeholder:text-subheading"
                                    placeholder="Tìm kiếm..."
                                    value={searchInput}
                                    onChange={(e) => { setSearchInput(e.target.value) }}
                                    required
                                    autoComplete="true"
                                    ref={searchInputDOM}
                                />
                                <Link
                                    to={`/tim-kiem?name=${searchInput}`}
                                    onClick={toggleNavbar}
                                    className="flex items-center px-3">
                                    <svg className="w-4 h-4 text-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </Link>
                            </div>

                            {/* ------ Navigation Links ------ */}
                            <div className="font-medium flex flex-col lg:pl-0 mt-4 mb-2 lg:mb-0 lg:flex-row lg:space-x-0 lg:mt-0">
                                <Link to="/phim-moi/1" className="header-link">Phim mới</Link>
                                <Link to="/chieu-rap/1" className="header-link">Phim chiếu rạp</Link>
                                <Link to="/phim-le/1" className="header-link">Phim lẻ</Link>
                                <Link to="/phim-bo/1" className="header-link">Phim bộ</Link>
                                <Link to="/hoat-hinh/1" className="header-link">Hoạt hình</Link>
                            </div>
                        </div>


                    </div>
                </BlurBox>
            </nav>

        </div>
    );
};

export default Header;

