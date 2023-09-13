import { useContext } from "react";
import BlurBox from "../BlurBox/BlurBox";
import bookmark from '../../assets/bookmark.svg'
import { Link } from "react-router-dom";
import { saveContext } from "../../contexts/saveContext";

const SavedButton = () => {
    const context = useContext(saveContext)

    return (
        <div className="relative group">
            <Link to='/phim-da-luu'
                className="block rounded-full overflow-hidden">
                <BlurBox>
                    <div className="p-4 group-hover:bg-gradient-to-br from-red-600 to-indigo-500">
                        <img src={bookmark} className="w-5 h-5" alt="Bookmark"/>
                    </div>
                </BlurBox>
            </Link>
            <div className="absolute -top-1 -right-1 px-[7px] rounded-full bg-primary/50 group-hover:bg-primary text-heading">
                {context.saveList.length}
            </div>
        </div>
    );
};

export default SavedButton;

