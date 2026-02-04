import FiveCard from "./FiveCard";
import FourCard from "./FourCard";
import OneCard from "./OneCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import SixCard from "./SixCard";


const Card = () => {
    return (
        <div className="bg-[rgb(2,6,23)] min-h-screen flex flex-col items-center gap-6 px-6 py-10">
            {/* Stack cards vertically, 90% width, Material UI style */}
            <div className="w-[90%]">
                <OneCard />
            </div>
            <div className="w-[90%]">
                <SecondCard />
            </div>
            <div className="w-[90%]">
                <ThirdCard />
            </div>

            <div className="w-[90%]">
                <FourCard />
            </div>

            <div className="w-[90%]">
                <FiveCard />
            </div>

              <div className="w-[90%]">
                <SixCard />
            </div>
        </div>
    );
};

export default Card;
