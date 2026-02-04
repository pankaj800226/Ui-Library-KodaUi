import OnePrice from "./OnePrice"
import TwoPrice from "./TwoPrice"

const Price = () => {
    return (
        <div className="bg-[rgb(2,6,23)] m-5 min-h-screen flex flex-col items-center gap-6 px-6 py-10">
            {/* Stack cards vertically, 90% width, Material UI style */}
            <div className="w-[90%]">
                <OnePrice />
            </div>

            <div className="w=[90%]">
                <TwoPrice />
            </div>
        </div>
    )
}

export default Price
