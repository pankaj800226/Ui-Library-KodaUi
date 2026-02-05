import OneButton from "./OneButton"
import ThirdButton from "./ThirdButton"
import TwoButton from "./TwoButton"

const Button = () => {
    return (
        <div className="bg-[rgb(2,6,23)] min-h-screen flex flex-col items-center gap-6 px-6 py-10">

            <div className="w-[90%]">
                <OneButton />
            </div>

             <div className="w-[90%]">
                <TwoButton />
            </div>

            <div className="w-[90%]">
                <ThirdButton />
            </div>
        </div>
    )
}

export default Button
