
import BlurBox from "../BlurBox/BlurBox";
import bookmark from '../../assets/bookmark.svg'
import { Link } from "react-router-dom";

const SavedButton = () => {

    return (
        <div className="rounded-full overflow-hidden">
            <Link>
                <BlurBox>
                    <div className="p-4 hover:bg-gradient-to-br from-red-600 to-indigo-500">
                        <img src={bookmark} className="w-5 h-5" alt="Bookmark"/>
                    </div>
                </BlurBox>
            </Link>
        </div>
    );
};

export default SavedButton;

