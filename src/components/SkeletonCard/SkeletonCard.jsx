import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = ({ className='' }) => {
    return (
        <div className={`w-full px-2 md:px-[10px] ${className}`}>

            <SkeletonTheme baseColor="#BCBCBC" highlightColor="#E0E0E0">
                <p>
                    <Skeleton count={1} borderRadius={4} className="aspect-[9/13.5]" />
                    <Skeleton count={1} borderRadius={3} className="h-5 mt-2" />
                    <Skeleton count={1} borderRadius={3} className="h-5 mt-2" />
                </p>
            </SkeletonTheme>

        </div>
    );
};

export default SkeletonCard;
