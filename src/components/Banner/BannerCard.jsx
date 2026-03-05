const BannerCard = ({ inProgress, resolved }) => {
    return (
        <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-4 mt-10 mb-20">

            {/* In Progress */}
            <div className="w-full md:w-1/2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] min-h-[200px] flex items-center justify-center rounded-2xl text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">In-Progress</h1>
                    <p className="text-5xl font-bold mt-2">{inProgress}</p>
                </div>
            </div>

            {/* Resolved */}
            <div className="w-full md:w-1/2 bg-gradient-to-r from-[#54CF68] to-[#00827A] min-h-[200px] flex items-center justify-center rounded-2xl text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Resolved</h1>
                    <p className="text-5xl font-bold mt-2">{resolved}</p>
                </div>
            </div>

        </div>
    );
};

export default BannerCard;