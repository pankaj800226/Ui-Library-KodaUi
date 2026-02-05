import OneForm from './OneForm'
import ThirdForm from './ThirdForm'
import TwoForm from './TwoForm'
import FourForm from './FourForm'
import FiveForm from './FiveForm'
import SixForm from './SixForm'
import SevenForm from './SevenForm'



const Forms = () => {
    return (
        <div className="bg-[rgb(2,6,23)] m-5 min-h-screen flex flex-col items-center gap-6 px-6 py-10">

            <div className="w-[90%]">
                <OneForm />
            </div>

            <div className="w-[90%]">
                <TwoForm />
            </div>

            <div className="w-[90%]">
                <ThirdForm />
            </div>
             <div className="w-[90%]">
                <FourForm />
            </div>

            <div className="w-[90%]">
                <FiveForm />
            </div>

            <div className="w-[90%]">
                <SixForm />
            </div>

             <div className="w-[90%]">
                <SevenForm />
            </div>

        </div>
    )
}

export default Forms
