import React from 'react';

const BannerCard = ({ leftImage, rightImage }) => {
    return (
        <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-4 mt-10 mb-20">
            {/* Card 1 */}
            <div className="w-full md:w-1/2 relative bg-gradient-to-r from-[#632EE3] to-[#9F62F2] min-h-[300px] flex items-center justify-center overflow-hidden rounded-2xl">
                <img src={leftImage} alt="left" className="absolute left-0 top-0 h-full w-1/2 object-cover" />
                <img src={rightImage} alt="right" className="absolute right-0 top-0 h-full w-1/2 object-cover" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-2xl font-bold">In-Progress</h1>
                    <p className="mt-4 text-6xl font-bold">0</p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-1/2 relative bg-gradient-to-r from-[#54CF68] to-[#00827A] min-h-[300px] flex items-center justify-center overflow-hidden rounded-2xl">
                <img src={leftImage} alt="left" className="absolute left-0 top-0 h-full w-1/2 object-cover" />
                <img src={rightImage} alt="right" className="absolute right-0 top-0 h-full w-1/2 object-cover" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-2xl font-bold">Resolved</h1>
                    <p className="mt-4 text-6xl font-bold">0</p>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;