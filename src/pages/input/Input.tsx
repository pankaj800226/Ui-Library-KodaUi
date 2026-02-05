import FourInput from "./FourInput"
import OneInput from "./OneInput"
import ThirdInput from "./ThirdInput"
import TwoInput from "./TwoInput"

const Input = () => {
    return (
        <div className="bg-[rgb(2,6,23)] m-5 min-h-screen flex flex-col items-center gap-6 px-6 py-10">
            <div className="w-[90%]">
                <OneInput />
            </div>

            <div className="w-[90%]">
                <TwoInput />
            </div>

            <div className="w-[90%]">
                <ThirdInput />
            </div>

            <div className="w-[90%]">
                <FourInput />
            </div>

        </div>
    )
}

export default Input
