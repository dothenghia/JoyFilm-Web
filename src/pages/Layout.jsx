import { Outlet } from "react-router-dom";

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SavedButton from "../components/SavedButton/SavedButton";

const Layout = () => {
    console.log('[Layout] Render')

    return (
        <>

            {/* ------ Header Navigation Bar ------ */}
            <Header />


            {/* Bookmark Icon */}
            <div className="fixed bottom-10 left-7 xl:left-[calc((100%-1152px-100px)/2)] z-50">
                <SavedButton />
            </div>

            {/* ------ Child route rendering ------ */}
            <Outlet />

            {/* ------ Footer ------ */}
            <Footer />
        </>
    );
};

export default Layout;
