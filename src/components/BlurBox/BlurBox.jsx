
const BlurBox = ({ children }) => {
    return (
        <div className="relative">
            <div className="absolute inset-0 backdrop-filter backdrop-blur-[6px]"></div>
            <div className="relative bg-slate-400/20">
                {children}
            </div>
        </div>
    );
};

export default BlurBox;
