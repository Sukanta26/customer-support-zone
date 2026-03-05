import BannerCard from "./BannerCard";

const Banner = ({ inProgress, resolved }) => {
    return (
        <BannerCard
            inProgress={inProgress}
            resolved={resolved}
        />
    );
};

export default Banner;