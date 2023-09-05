import { Link } from "react-router-dom";

const New = () => {
    console.log('[New] Render')

    return (
        <div style={{backgroundColor: 'gray'}}>
            <h1>New page</h1>
            <Link to='/phim/123456'>Yo</Link>
        </div>
    );
};

export default New;
