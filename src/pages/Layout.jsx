import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Carousel from "../../components/Carousel";

const Layout = () => {
    console.log('[Layout] Render')
    const [siderFilms, setSiderFilms] = useState([])
    const [topFilms, setTopFilms] = useState([])

    const location = useLocation();

    useEffect(() => {
        console.log('[Layout] fetch Sider')
        setSiderFilms([1, 2, 3, 5])
    }, [])

    useEffect(() => {
        console.log('[Layout] fetch Carousel')
        setTopFilms(['Hehe', 'Haha', 'Kaka', 'Kiki'])
    }, [])

    return (
        <div style={{ backgroundColor: 'green' }}>
            <h1>Layout page</h1>
            <nav>
                <Link to='/'>Trang chủ</Link>
                <Link to='/phim-le'>Phim Lẻ</Link>
                <Link to='/phim-bo'>Phim Bộ</Link>
                <Link to='/tim-kiem'>Tìm kiếm</Link>
            </nav>

            <div>
                {location && location.pathname && location.pathname === '/' &&
                    (
                        <Carousel topFilms={topFilms}/>
                    )
                }
            </div>

            <div style={{ display: 'flex' }}>
                <Outlet />

                <div style={{ flexBasis: '30%' }}>
                    {
                        siderFilms.map((film, index) => {
                            return (<p key={film}>{film}</p>)
                        })
                    }
                </div>
            </div>

            <div>
                FOOTER
            </div>
        </div>
    );
};

export default Layout;
