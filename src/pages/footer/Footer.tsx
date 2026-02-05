import FourFooter from "./FourFooter"
import OneFooter from "./OneFooter"
import ThreeFooter from "./ThreeFooter"
import TwoFooter from "./TwoFooter"

const Footer = () => {
    return (
        <div className="bg-[rgb(2,6,23)] m-5 min-h-screen flex flex-col items-center gap-6 px-6 py-10">
            <div className="w-[90%]">
                <OneFooter />
            </div>

            <div className="w-[90%]">
                <TwoFooter />
            </div>

            <div className="w-[90%]">
                <ThreeFooter />
            </div>

            <div className="w-[90%]">
                <FourFooter />
            </div>


        </div>
    )
}

export default Footer

