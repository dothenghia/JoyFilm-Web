
const BlurBox = ({ children }) => {
    return (
        <div className="relative">
            <div className="absolute inset-0 backdrop-filter backdrop-blur-sm"></div>
            <div className="relative bg-white/20">
                {children}
            </div>
        </div>
    );
};

export default BlurBox;
