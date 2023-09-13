import SkeletonCard from "../SkeletonCard/SkeletonCard";

const SkeletonSlide = () => {
    return (
        <>
            {/* <div className="-mx-2 md:-mx-[10px] pr-[56px] md:pr-[60px] */}
            <div className="mt-8 -mx-2 md:-mx-[10px]
                grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 min-[896px]:grid-cols-5 lg:grid-cols-6">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard className="hidden sm:block" />
                <SkeletonCard className="hidden md:block" />
                <SkeletonCard className="hidden min-[896px]:block" />
                <SkeletonCard className="hidden lg:block" />
            </div>
        </>
    );
};

export default SkeletonSlide;
