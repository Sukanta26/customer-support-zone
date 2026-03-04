import React from 'react';
import BannerCard from '../Banner/BannerCard';

import leftImg from '../../assets/vector1.png';
import rightImg from '../../assets/vector2.png';

const Banner = () => {
    return (
        <div>
            <BannerCard
                leftImage={leftImg}
                rightImage={rightImg}
            />
        </div>
    );
};

export default Banner;