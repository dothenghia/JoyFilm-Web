import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
    console.log('[Layout] Render')

    return (
        <div>
            
            {/* Header Navigation Bar */}
            <Header/>

            {/* Child route rendering */}
            <Outlet/>

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Layout;
