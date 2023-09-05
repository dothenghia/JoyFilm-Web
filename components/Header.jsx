import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Header Nav Bar</h1>
            <nav>
                <Link to='/'>Trang chủ</Link>
                <Link to='/tim-kiem'>Tìm kiếm</Link>

                <Link to='/phim-moi'>Phim mới</Link>
                <Link to='/chieu-rap'>Phim chiếu rạp</Link>
                <Link to='/phim-le'>Phim lẻ</Link>
                <Link to='/phim-bo'>Phim bộ</Link>
                <Link to='/hoat-hinh'>Hoạt hình</Link>
            </nav>
        </div>
    );
};

export default Header;
