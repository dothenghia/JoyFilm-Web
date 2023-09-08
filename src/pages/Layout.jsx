import { Outlet } from "react-router-dom";

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Layout = () => {
    console.log('[Layout] Render')

    return (
        <div id="layout">

            {/* Header Navigation Bar */}
            <Header />

            {/* Child route rendering */}
            <Outlet />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
