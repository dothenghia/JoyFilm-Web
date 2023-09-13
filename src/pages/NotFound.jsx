import { Link } from "react-router-dom";


const NotFound = () => {
    console.log('[NotFound] Render')

    return (
        <div id="notfound" className="page-container-0topside">
            <div className="section-container">
                <h1 className="section-title text-center">Trang không tồn tại</h1>

                <Link to='/' className="episode-btn">
                    Quay lại trang chính
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
